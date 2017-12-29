FROM phusion/baseimage

RUN apt-get clean && apt-get update && apt-get install -y apt-utils python3 python3-dev python3-pip build-essential \
    cmake net-tools python3-numpy libgtk-3-dev libboost-all-dev

COPY . ./cv
WORKDIR /cv

RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt
