# combined configs
apiVersion: v1
kind: Service
metadata:
  name: server-cluster-ip-service
spec:
  type: ClusterIP
  selector:
    component: server
  ports:
    - port: 5000
      targetPort: 5000
---
apiVersion: v1
kind: Service
metadata:
  name: clinet-cluster-ip-service
spec:
  type: ClusterIP
  selector:
    component: web
  ports:
    - port: 3000
      targetPort: 3000


# Commands

  _delete entity_
kubectl delete service postgres-cluster-ip-service

  _add all yaml to the k8s_
kubectl apply -f k8s

  _get information about the kind_
kubectl get [pods|services|deployments]

  _get additional information about the kind_
kubectl describe [pods|services|deployments]

  _add secrets env_
kubectl create secret generic pgpassword --from-literal PGPASSWORD=postgres

  _update existing pod from hub with new version_
kubectl set image deployment/client-deployment client=dideex/complex-client:title

  _install helm_
curl -LO https://git.io/get_helm.sh
chmod 700 get_helm.sh
./get_helm.sh

  _create a new service account RBAC_
kubectl create serviceaccount --namespace kube-system tiller
kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller
  _init helm_
helm init --service-account tiller --upgrade
helm install stable/nginx-ingress --name my-nginx --set rbac.create=true

  _config helm with https_
helm install \
  --name cert-manager \
  --namespace kube-system \
  stable/cert-manager