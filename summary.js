const fs = require('fs');
const path = require('path');

const rootPath = path.join(__dirname, 'docs');

const searchDirectory = (dir, store) => {
  fs.readdirSync(dir, {withFileTypes: true}).forEach((entry) => {
    let fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
        searchDirectory(fullPath, store);
    } else if (entry.isFile()) {
        // console.log(`filename: ${fullPath}`)
        if (entry.name.endsWith('.json')) {
          const contents = fs.readFileSync(fullPath, 'utf-8');
          store.push({
            fullPath: fullPath.replace(rootPath, ''),
            contents
          })
        }
    } else {
        console.error(`unexpected type: ${fullPath}`);
    }
});
}

const store = [];
const run = (dir) => {
  console.log('dir', dir);
  searchDirectory(dir, store);
  // fs.writeFileSync('./result.txt', JSON.stringify(store, null, 2));

  let md = '';
  store.forEach((item) => {
    md += `\n ## ${item.fullPath} \n`
    md +=  item.contents + '\n'
  })
  // fs.writeFileSync('./gradle-code.md', md);
  fs.writeFileSync('./README.md', md);
}

run(rootPath);