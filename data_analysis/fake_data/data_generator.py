import csv
import json
import string
from random import randint, randrange, choice
from datetime import datetime, timedelta


RESULT_FILENAME = 'fake_data.json'
NUMBER_OF_RECORDS = 500
NUMBER_OF_AIRPORTS = 8405
TIME_FORMAT = "%Y-%m-%dT%H:%MZ"


def generate():
    """
    Data is written in file fake_data.json in format as follows
    {
        passportHash: {
            "to": string,   //  Airport name
            "from": string  //  Airport name
            "timestamp": string  // Datetime of customs check, in format '%Y-%m-%dT%H:%MZ'
        }
    }
    :return:
    """

    fake_data = dict()
    fieldnames = ("airport_id", "name", "city", "country", "iata_faa", "iaco",
                  "latitude", "longitude", "altitude", "zone", "dst")
    with open("../datasets/global_airports.csv", 'r') as fh:
        airports_data = parse_csv_to_json(fh, fieldnames)

    for item in range(NUMBER_OF_RECORDS):
        src_airport_id = randint(1, NUMBER_OF_AIRPORTS)
        dst_airport_id = randint(1, NUMBER_OF_AIRPORTS)
        if NUMBER_OF_AIRPORTS > src_airport_id == dst_airport_id:
            dst_airport_id += 1
        timestamp = get_rand_time()
        passport_hash = get_rand_hash()
        fake_data[passport_hash] = {
            "to": dst_airport_id,
            "from": src_airport_id,
            "timestamp": timestamp.strftime(TIME_FORMAT)
        }

    with open(RESULT_FILENAME, 'w') as fh:
        json.dump(fake_data, fh)
    print("Done!")


def get_rand_hash():
    key_prefix = "0x"
    gen_str = ""
    while len(gen_str) < 40:
        gen_str += choice(string.ascii_lowercase + string.digits)
    return key_prefix + gen_str


def get_rand_time():
    start = datetime.strptime("2017-12-01T00:00Z", TIME_FORMAT)
    end = datetime.strptime("2017-12-25T00:00Z", TIME_FORMAT)
    delta = end - start
    int_delta = (delta.days * 24 * 60 * 60) + delta.seconds
    random_second = randrange(int_delta)
    return start + timedelta(seconds=random_second)


def parse_csv_to_json(csv_filehandler, fieldnames):
    reader = csv.DictReader( csv_filehandler, fieldnames)
    result_json = dict()
    for row in reader:
        _id = row['airport_id']
        row.pop('airport_id')
        result_json[_id] = row
    return result_json


if __name__ == "__main__":
    generate()
