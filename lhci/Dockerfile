FROM node:18-bullseye-slim AS builder

# Litestream CLI のバージョンを指定
ENV LITESTREAM_VERSION=v0.3.13

# Install utilities
RUN apt-get update --fix-missing && apt-get install -y python build-essential && apt-get clean

# Litestream CLI をインストール
ADD https://github.com/benbjohnson/litestream/releases/download/$LITESTREAM_VERSION/litestream-$LITESTREAM_VERSION-linux-amd64.tar.gz /tmp/litestream.tar.gz
RUN tar -C /usr/local/bin -xzf /tmp/litestream.tar.gz

FROM node:18-bullseye-slim AS runner
WORKDIR /usr/src/lhci

# 証明書のインストール
RUN apt-get update && apt-get install -y ca-certificates

# Litestream CLI をコピー
COPY --from=builder /usr/local/bin/litestream /usr/local/bin/litestream

# litestream の設定ファイルと実行スクリプトをコピー
COPY litestream.yml /etc/litestream.yml
COPY run.sh ./

# lhci serverの設定
COPY package.json .
COPY lighthouserc.json .
RUN npm install

EXPOSE 9001
CMD ["/bin/sh", "run.sh"]