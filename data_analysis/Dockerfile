FROM phusion/baseimage

RUN add-apt-repository ppa:ethereum/ethereum
RUN apt-get clean && apt-get update && apt-get install -y apt-utils python3 python3-dev python3-pip build-essential \
    net-tools

WORKDIR /app
COPY . /app/
RUN pip3 install -r requirements.txt

