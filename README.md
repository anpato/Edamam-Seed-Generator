# Edamam Api Seed Generator

Welcome to the Edamam Seed Data Generator.

To Get Started:

Run `npm install`

Create a `.env` file in the root of the directory.
You'll need your Api_key and App_id from Edamam.

Create an entry in the `.env` for both the key and id like so :

```sh
APP_ID=123545
APP_KEY=abcfgrdafgs
```

Open `index.js` and find the variable called queries:

```js
const queries = []
```

You can input your queries here such as `'beef'` or `'chicken'` and will return recipes related to these queries. Ex:

```js
const queries = ['beef', 'chicken']
```

To run this script use `npm run generate`. Returned data will be written to a `recipes.json` file.
