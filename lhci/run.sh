#!/bin/sh

set -e

rm -f /data/lhci.db

#データベースファイルを復元する
litestream restore -if-replica-exists -config /etc/litestream.yml /data/lhci.db

#データベースファイルをレプリケートしてLHCIサーバーを起動
PORT=9001 litestream replicate -exec "npm start" -config /etc/litestream.yml