const fs=require('fs')
const path=require('path')
//create folder name crud
const crudPath=path.join(__dirname,'crud');
const filePath=`${crudPath}/tut.txt`
// fs.writeFileSync(filePath,"I am writing into the disk")

// fs.readFile(filePath,'utf8',(err,data)=>{
//     console.log(data);
// })

// fs.appendFile(filePath,' .This is appending text',(err)=>{
//     if(!err)console.log('text appended');
// })

// fs.rename(filePath,`${crudPath}/rename.txt`,(err)=>{
//     if (!err) {
//         console.log('file renamed');
//     }
// })

fs.unlinkSync(`${crudPath}/rename.txt`)
