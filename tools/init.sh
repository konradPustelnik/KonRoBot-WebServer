#!/bin/bash

service=KonRoBot-WebServer.service
systemd_dir=/etc/systemd/system

sudo cp tools/"$service" "$systemd_dir"//"$service"
sudo mkdir "$systemd_dir"/"$service".d
sudo systemctl daemon-reload
sudo systemctl enable "$service"
sudo systemctl start "$service"
