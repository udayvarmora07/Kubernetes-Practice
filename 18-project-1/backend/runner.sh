#!/bin/sh

pm2 start server.js &
nginx -g 'daemon off;'