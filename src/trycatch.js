try
{
setTimeout(()=>{
    console.log('Hacking wifi...')
            
},1000)
console.log('a')
//scheduled code 
//when the js engine 
setTimeout(()=>{
    //try{
    console.log('Got your username and pwd...')
    console.log(email)
   // }catch(er){console.log(er)}
},2000)
console.log('b')
console.log('c')
console.log('d')


setTimeout(()=>{console.log('Got control on your tweeter Id ...')},3000)
console.log(rahul)
setTimeout(()=>{console.log('Your userid and password is .....')},4000)

console.log(address)
console.log(rahul)
}
catch(err){
    console.log('some error')
}

finally{

    console.log('in finally block, this block executes no matter whether error occured or not')
}


try{
let age= 15
if (age < 18){
    throw new Error('Invalid Age')
}
}catch(err){
    console.log(err.name)
    console.log(err.message)

}