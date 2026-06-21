const fs = require('fs');
const lines = fs.readFileSync('src/data.ts', 'utf8').split('\n');
const updates = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const updateMap = Object.fromEntries(updates.map(u => [u.id, u]));
let currentId = null;
let inOptions = false;
let newLines = [];
for (let i = 0; i < lines.length; i++) {
   const line = lines[i];
   const idMatch = line.match(/id:\s*(\d+),/);
   if (idMatch) { currentId = parseInt(idMatch[1]); }
   
   if (line.includes('options: [')) {
       newLines.push(line);
       if (updateMap[currentId]) {
           const opts = updateMap[currentId].options;
           newLines.push(`      "${opts[0]}",`);
           newLines.push(`      "${opts[1]}",`);
           newLines.push(`      "${opts[2]}",`);
           newLines.push(`      "${opts[3]}"`);
           inOptions = true;
       }
       continue;
   }
   if (inOptions) {
       if (line.includes('],')) {
           inOptions = false;
           newLines.push(line);
       }
       continue;
   }
   const correctMatch = line.match(/correctAnswerIndex:\s*(\d+),/);
   if (correctMatch && updateMap[currentId]) {
       newLines.push(`    correctAnswerIndex: ${updateMap[currentId].ans},`);
       continue;
   }
   newLines.push(line);
}
fs.writeFileSync('src/data.ts', newLines.join('\n'));
console.log('Updated ' + process.argv[2]);
