from flask import Flask, request
import pandas as pd
import json
import collections
from sqlalchemy import create_engine

app = Flask(__name__)


def checkRoutes(user,data,crimes):
    res = pd.DataFrame(columns=crimes.columns)
    tmp = data[data.hash_x == user]
    for ind, i in tmp.iterrows():
        danger = crimes[(crimes.year == i.date.year) & (crimes.month == i.date.month) &
                  (crimes.day > i.date.day) & ((crimes.city == i.city_x) |
                                               (crimes.city == i.city_y))]
        if not danger.empty:
            res = pd.concat([ danger, res])
    try:
        freq = round(len(res.country.unique())/len(tmp), 3)
    except ZeroDivisionError:
        freq = 0
    return res, freq



def getFrequenceStatistics(user, data):
    tmp = data[data.hash_x == user]
    dates = []
    for ind, i in tmp.iterrows():
        dates.append(i.date.date().year)
    count_loc = len(dates)
    count = collections.Counter(dates)
    
    dict_freq = {}
    for j in count.most_common():
        dict_freq[j[0]] = round(j[1]/count_loc, 3)
        
    return dict_freq



def geTopLocations(user,data):
    tmp = data[data.hash_x == user]
    locations = []
    for ind, i in tmp.iterrows():
        locations.append(i.city_x + " " + i.country_x)
        locations.append(i.city_y + " " + i.country_y)
    count = collections.Counter(locations)
    res = []
    for j in count.most_common(3):
        if j[1] > 1:
            res.append(j)
    
    return(res)


def setConnection():
    engine = create_engine('postgresql://uaegovhack:asudopass@uaegovhack-db.cs4gz650um1s.us-east-2.rds.amazonaws.com:5432/uaegovhack')
    flights = pd.read_sql_table("flights_new",engine)
    crimes = pd.read_sql_table("terror_for_demo",engine)
    return flights, crimes


def makeJson(user, data1,crimes):
    data = {}
    data['mostFrequentLocations'] = geTopLocations(user, data1)
    data['frequentStatistics'] = getFrequenceStatistics(user, data1)
    x, freq = checkRoutes(user, data1,crimes)
    data['crimesInvolvedIn'] = x.to_json()
    data['probability'] = freq
    json_data = json.dumps(data)
    return json_data


@app.route('/', methods=['POST'])
def index():
    return "Hello, World!"


@app.route('/analytics/', methods=['GET'])
def get_analytics_widget():
    name = request.args.get('user', None)
    flights, crimes = setConnection()
    return makeJson(name, flights, crimes)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5501, debug=True)



