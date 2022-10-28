const fs=require('fs');
const path=require('path');

//create a folder with the name files
const dirpath=path.join(__dirname,'files');
console.log(dirpath);
for (let i = 0; i < 5; i++) {
    fs.writeFileSync(`${dirpath}/hello${i}.txt`,`this is file ${i}`)    
}
fs.readdir(dirpath,(err,files)=>{
    console.log(files);
    files.forEach((element)=>{
        console.log(element);
    })
})