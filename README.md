# Notion Accessor

Sample code to retrieve record from Notion using their public API.
Tutorial followed from [here](https://www.youtube.com/watch?v=9JdP-S3crt8)

## Key Points

- Frontend and Backend both are written as part of this package.
- `npm start` script in package.json in pointing to `node index` command
- For server `express` is used
- `dotenv` package is used for storing the environment variables in `.env` file
- `notion.js` is the main file hitting the Notion's public API and getting the data
- `main.js` is the script called from front-end which again hits the **http://localhost:8000/data** path for which `index.js` has routed the path to backend method defined in `notion.js`
- public method which has the frontend content is bind to express in index.js
