var add=(a,b,calback)=>{
setTimeout(()=>{
    calback()
},2000)
}
add(1,4,()=>{
    console.log("sum")
})