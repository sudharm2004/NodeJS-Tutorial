const fs=require('fs')
const input=process.argv;

console.log(process.argv)
console.log(process.argv[2])

//give input with want to add/delete file ,file name,file text
// for eg:- node input.js add hello.txt 'how are you boi'
if (input[2]=='add') {
    fs.writeFileSync(input[3],input[4])
} else if(input[2]=='delete'){
    fs.unlinkSync(input[3])
}
else{
    console.log('invalid input');
}