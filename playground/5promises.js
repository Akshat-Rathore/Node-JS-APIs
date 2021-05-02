
const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        },3000)
    }
    )
}

add(1,1).then((sum)=>{
    console.log(sum)
    return add(sum,4)
}).then((sum2)=>{
    console.log(sum2)
})