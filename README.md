# Docker

```
docker build -t examplenode .
```
```
docker run -d -p 5000:5000 --name node-app examplenode
```

# Heroku

```
git clone https://github.com/cayu/aprendiendo-nodejs-heroku.git
cd aprendiendo-nodejs-heroku/
heroku create
git push heroku main
heroku logs --tail
```
