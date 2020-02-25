FROM buildpack-deps:bionic-curl

RUN curl "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl" -O /usr/local/bin/kubectl && chmod +x /usr/local/bin/kubectl