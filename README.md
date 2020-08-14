# test-puppeteer

```shell
pushd src
npm i
popd

docker-compose up -d
docker-compose exec puppeteer bash
```

```shell
cd /home/chromium
bash /home/src/downloadChromium.sh 618750
ln -s 618750/chrome-linux/ ./latest

cd /home/src
node index.js
```
