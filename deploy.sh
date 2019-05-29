docker build -t dideex/complex-client:latest -t dideex/complex-client:$SHA -f ./client/Dockerfile ./client
docker build -t dideex/complex-server:latest -t dideex/complex-server:$SHA -f ./server/Dockerfile ./server
docker build -t dideex/complex-worker:latest -t dideex/complex-worker:$SHA -f ./worker/Dockerfile ./worker

docker push dideex/complex-client:latest
docker push dideex/complex-client:$SHA
docker push dideex/complex-server:latest
docker push dideex/complex-server:$SHA
docker push dideex/complex-worker:latest
docker push dideex/complex-worker:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=dideex/complex-server:$SHA
kubectl set image deployments/client-deployment client=dideex/complex-client:$SHA
kubectl set image deployments/worker-deployment worker=dideex/complex-worker:$SHA