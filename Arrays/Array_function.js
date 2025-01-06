function sum(a, b)
{
    if(typeof(a) === "number" && typeof(b) === "number"){
        return a + b
    }
    else throw TypeError("Invalid Args")  
    
}
// console.log(sum(3, "Hello"))
// sum(2,3)
// console.log(sum(2,3))

const multiply = (a,b) => {
    return a * b
}

const divide = (a, b) => a/b
let a = 3

try{
sum(a,3)
sum(3, "Hello")
// console.log(sum(a,3))
}catch(error){
    console.log(error.message)
}
