const dotenv = require('dotenv').config()
const {Client} = require("@notionhq/client")

const notion = new Client({
    auth: process.env.NOTION_TOKEN
})

console.log("Getting databases")
const listDatabases = async() => {
    const res = await notion.databases.list()
    console.log(res)
}
listDatabases()
