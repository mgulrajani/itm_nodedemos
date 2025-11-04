//any function can be declared as async
//async function always returns a Promise


async function fun1(){
    return 5
}

fun1().then((x)=>{console.log('some val',x)})


async function data1(){
let mumbaiWeather = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("raining heavily")
    },2000)}

)


let tirupatiWeather =new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("cloudy")
    },3000)
})
// i am waiting on two promises
//once they are fulfiled what ever is the result
//that i am capturing  , in the variables
  console.log('waiting for mumbai weather')
  let mw = await mumbaiWeather
  console.log('got  mumbai weather')
  console.log('waiting for tirupati weather update')
 
 let tw = await tirupatiWeather
 console.log('Got tirupati weather')
 
  return [mw,tw]
}

/* mumbaiWeather.then((data)=>{console.log(data)})

tirupatiWeather.then((data)=>{console.log(data)}) */


//i have 2 promises in data1 function

//what does async function returns a Promise

console.log('Getting weather info from the control room server')
//data1 is a async funciton
//it returns a promise

let a = data1()

a.then((val)=>{console.log(val)})
