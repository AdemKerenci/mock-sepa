## MOCK SEPA APPLICATION
First, Install docker.

Then run the following commands in the project root.
```bash
docker build -t mock-sepa-docker . 
docker run -p 3000:3000 mock-sepa-docker
```

Open [http://localhost:3000/sepa](http://localhost:3000/sepa) with your browser to see the result.

Go and check the terminal that runs the docker command or check docker logs to get log info of the sepa transfers.
