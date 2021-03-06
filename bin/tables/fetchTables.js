#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

const tpl = require('./tpl.js');
const states = require('../../src/states.json');
const { base } = require('../airtable.js');

const tables = ['Statistics', 'Source'];

for (const table of tables) {
  fetchTable(table).catch(e => console.log(e));
}

const dataPath = path.join(process.cwd(), `src/data/index.js`);
const dataTpl = tpl(
  [...states, 'AUS'],
  tables.map(table => table.toLowerCase())
);
fs.writeFile(dataPath, dataTpl);

async function fetchTable(table, view = 'Grid view', maxRecords = 500) {
  console.log(`fetching ${table}'s data...`);
  const filePath = path.join(
    process.cwd(),
    `src/data/${table.toLowerCase()}.js`
  );
  let items = await base(table)
    .select({
      maxRecords,
      view
    })
    .all();

  items = items.map(statistic => statistic.fields);
  const tpl = `
  export const ${table.toLowerCase()} = ${JSON.stringify(items, null, 2)};
    `;
  await fs.writeFile(filePath, tpl);
}
