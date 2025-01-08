#!/bin/sh
sudo apt update -y
sudo snap install microk8s --classic
sudo microk8s status --wait-ready
sudo microk8s enable dashboard
sudo microk8s enable dns
sudo microk8s enable registry
sudo microk8s enable community
sudo microk8s enable istio
sudo apt install firewalld -y
sudo systemctl start firewalld
sudo systemctl enable firewalld
sudo firewall-cmd --add-port=25000/tcp --add-port=16443/tcp --add-port=12379/tcp --add-port=10250/tcp --add-port=10255/tcp --add-port=10257/tcp --add-port=10259/tcp --permanent
sudo firewall-cmd --reload
sudo {{ join_cmd }}