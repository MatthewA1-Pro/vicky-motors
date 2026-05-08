const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) {
        filelist = walkSync(path.join(dir, file), filelist);
      }
    }
    else {
      if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.json') || file.endsWith('.sql') || file.endsWith('.md')) {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
};

const files = walkSync('./');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;

  // Exact phrases
  newContent = newContent.replace(/LUXE Auto Gallery/gi, 'VICC AUTOS');
  newContent = newContent.replace(/Luxe Auto Gallery/gi, 'VICC AUTOS');
  newContent = newContent.replace(/Luxe Auto/gi, 'VICC AUTOS');
  
  // Single words
  newContent = newContent.replace(/LUXE/g, 'VICC AUTOS');
  newContent = newContent.replace(/Luxe/g, 'VICC Autos'); // For title case
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated', file);
  }
});
