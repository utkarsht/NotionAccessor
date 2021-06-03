const dotenv = require('dotenv').config()
const { Client } = require('@notionhq/client')

const notion = new Client({
    auth: process.env.NOTION_TOKEN
})

database_id = process.env.NOTION_PAGE

module.exports = async function getData() {
    const payload = {
        path: `database/${database_id}/query`,
        method: 'POST',
    }

    const { results } = await notion.request(payload)
    const data = results.map((page) => {
        return {
            id: page.id,
            title: page.properties.Name.title[0].text.content
        }
    })
    return data
}
