const fs = require('fs')
const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()
const queries = ['chicken', 'beef']

function read(query) {
  fs.readFile('recipes.json', async (err, data) => {
    if (err) throw err
    const fileData = JSON.parse(data)

    for (let i = 0; i < query.length; i++) {
      const resp = await axios.get(`https://api.edamam.com/search?q=${query[i]}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}
     `)
      fileData.push(...resp.data.hits)
    }
    fs.writeFile('recipes.json', JSON.stringify(fileData), (err, data) => {
      if (err) throw err
      console.log('Done')
    })
  })
}

read(queries)
