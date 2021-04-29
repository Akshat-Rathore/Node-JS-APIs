var add=(a,b,calback)=>{
setTimeout(()=>{
    calback(a+b)
},2000)
}
add(1,4,(sum)=>{
    console.log(sum)
})