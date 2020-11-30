#!/bin/bash

service=KonRoBot-WebServer.service
systemd_dir=/etc/systemd/system

sudo systemctl stop "$service"
sudo systemctl disable "$service"
sudo rm -rf "$systemd_dir"/"$service"*
sudo systemctl daemon-reload
