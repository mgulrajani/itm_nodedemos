import {readFile} from 'fs';

readFile('data.txt','utf8',(err,data)=>{
    if(err){
        console.log('Error reading file', err);
    }
    else{
        console.log('File data:',data);
    }
}
);

