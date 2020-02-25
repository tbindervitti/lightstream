#1/bin/bash
jobs=( $(kubectl get jobs --no-headers -o custom-columns=":metadata.name" | awk "/$1-[0-9]+/{print \$1}" | sort -r ) )
for job in "${jobs[@]}"
do
  echo Logs from job $job
  pod=$(kubectl get pods -l job-name=$job --no-headers -o custom-columns=":metadata.name")
  kubectl logs $pod
done
