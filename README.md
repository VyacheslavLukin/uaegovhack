# UAE Government Virtual Hackathon project


# Start everything
``docker-compose up --build``

## Parity PoA network based on docker-compose

Setup your first Parity PoA network with 3 authorities and 3 members.

### Setup

0. Install [docker](https://docs.docker.com/engine/installation/) and [docker-compose](https://docs.docker.com/compose/install/)
1. Run `docker-compose up -d`

### RUN

To start all services, just run
```docker-compose up -d ``` in project folder

### Access the Parity UI
Run `docker-compose logs | grep token=` to get an authenticated URL for the Parity UI.

### Access the [ethstats](https://github.com/cubedro/eth-netstats) dashboard.
A nice dashboard is already configured and connected with all the nodes.
Find it at [http://127.0.0.1:3001](http://127.0.0.1:3001).

### Accounts
There is already an account with an empty password that has enough ether:

```
0x6B0c56d1Ad5144b4d37fa6e27DC9afd5C2435c3B
```

And another who is broke:
```
0x00E3d1Aa965aAfd61217635E5f99f7c1e567978f
```

You may also want to change the list of prefunded accounts in `parity/config/chain.json`.

Add JSON-formatted ethereum accounts to `parity/keys` and they will appear in the UI.

### Access JSON RPC 
Talk to JSON RPC at [http://127.0.0.1:8545](http://127.0.0.1:8545) with your favorite client.

Be kind and send the poor an ether!

```
curl --data '{"jsonrpc":"2.0","method":"personal_sendTransaction","params":[{"from":"0x6B0c56d1Ad5144b4d37fa6e27DC9afd5C2435c3B","to":"0x00E3d1Aa965aAfd61217635E5f99f7c1e567978f","value":"0xde0b6b3a7640000"}, ""],"id":0}' -H "Content-Type: application/json" -X POST localhost:8545
```

## Smart contract

Smart contract will be automatically deployed to the blockchain network on `docker-compose up`. To find it address search through logs
```bash
docker-compose logs | grep 'Contract address'
```

or generate one more with
```docker-compose run deployer```


## Node.js server as a backend

```docker-compose run web```

`http://localhost` for UI

## CV face recognition

```docker-compose run cv```

#### How to check
Get face_id for known image

```curl -X POST -F "file=@3.png" http://localhost:5001/get_face_id```

New image

```curl -X POST -F "file=@3.png" http://localhost:5001/new_image```

## Data analysis part

```docker-compose run analytics```

### How to check
```curl -i -X GET http://localhost:5501/analytics/?user=0xlbx02acp4ufxoxu0qtvaoo2oxoofvx61c46l86m8```

## Blockchain api

```docker-compose run blkchain_api```

### How to check

```curl -X GET http://localhost:5050/getTravels?passportHash=0xlbx02acp4ufxoxu0qtvaoo2oxoofvx61c46l86m8```

## Nginx
no need to rebuild manually, should run with `docker-compose up`

# Open datasets and API relevant to the project
1. [Global airports](https://old.datahub.io/dataset/global-airports)
2. [Open flight data](https://openflights.org/data.html)

