FROM grafana/k6

WORKDIR /load-tester
ADD . .

ENTRYPOINT [ "k6", "main.js"]