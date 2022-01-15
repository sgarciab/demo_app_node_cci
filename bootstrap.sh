#!/bin/bash 
sudo apt update -y
sudo apt install git -y
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm install v16.13.2
npm install pm2 -g 