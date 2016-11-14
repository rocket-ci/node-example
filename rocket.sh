#!/usr/bin/env bash

set -uoxv
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10
npm install
npm test
