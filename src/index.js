//destructure  ,rest ,spread operators

//destructure arrays and objects  
//what is destructing ?
//unpacking the array or the object  [  ] { }   

let arr = [4,5]

let a = arr[0]
let b=arr[1]

//if i want to extract the values of the above array and place them in individual variables ,we can do so by destructuring

//arr 2 and i am declaring 3 variables a1 b1 c1 ,arr size is less than the variables , the left out variables will be undefined
let [a1,b1,c1] =arr
console.log(a1, '',b1, c1)


let arr2=[1,2,3,4,5,6,7]

let [a2,b2,c2,d2] = arr2
console.log(a2,b2,c2,d2)


//arr2 should give first two values to a3 and a4 and the remaining values it should spread in remArr
// [ ]
let [a3,a4,...remArr]=arr2


console.log(a3,a4,remArr)
//we were spreading the remaining of arr2 in remArr
let [a5, ,b4,...remArr2]=arr2

console.log(a5,b4,remArr2)


//destructuring of objects
//{ }
let {id,name}={id:1,name:'Mitali'}

console.log(id,name)

let {pid,pname,pbrand}={pid:111,pname:'keyboard',pbrand:'acer'}

console.log(pid,pname,pbrand)

let p1 = {pid:111,pname:'keyboard',pbrand:'acer'}
//spread operator 
//we are spreading p1 object in p2 object
let p2 = {...p1}

let p3 = {...p2,pname:'cables',pid:112}
console.log(p2,'p2')
console.log(p3,'p3')


function sum(v1,v2,v3,v4){
    return v1+v2+v3+v4
}

let arr5 = [4,5,6,7,8,9,10]
console.log(sum(...arr5))



/*create an array of 10 Element 
assign first 2 to variables and rest to another array using destructuring and spread operator   
let arr10 = [10,20,30,40,50,60,70,80,90,100]

let [x1,x2,...restArr]=arr10
*/
