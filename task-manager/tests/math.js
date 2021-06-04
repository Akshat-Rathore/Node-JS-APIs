const calcTip=(tottal, tipPercent=0.1)=>{
    const tip=tottal*tipPercent
    return tottal+tip
}
const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        },3000)
    }
    )
}


module.exports={calcTip,add}