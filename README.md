# Gauche ou Droite client

JS client for ~~stupid~~ ~~mmo~~ funny game **Gauche ou Droite ?**

You can find the server (REST API) here: https://github.com/plastocman/gauche-ou-droite

## Hey man, how do I run this?

First, make sure npm dependancies are installed with:

```shell
$ npm i
```

Then you can run the app:

```shell
$ npm start
```

## I keep getting an error message/I can't see any photo!

You may need to specify the url and/or port your rest api is serving on.
Go in src/index.js and modify the following line to replace the url with the one you need:

```javascript
const API_URL = 'http://localhost:5000'
```

**Note:** Don't end your url with a slash '/': Set 'localhost:4242' instead of 'localhost:4242/'.
