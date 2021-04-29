const request=require('request')

const call=(lat,lon,cal)=>{
    const url='http://api.weatherstack.com/current?access_key=8a234eaaee4db7a9810ce70970613c31&query=lat,lon&units=f'
    request({url:url,json:true},(error,response)=>{
    if(error){
        cal(error,undefined)
    }else if(response.body.error){
        cal(response.body.error,undefined)
    }
    else{
    cal(undefined,"Its "+ (response.body.current.temperature)+" temperature outside but feels like "+(response.body.current.feelslike))}
})}

call(37.8267,122.4233,(error,respose)=>{
    console.log('Error',error)
    console.log('Data',respose)
})
const url1="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWtzaGF0cnMiLCJhIjoiY2tueG0xZ2psMGJrbDJ2bzNxenU5bHBnaSJ9.GrthpVcms9pGFZGfofRDuQ&limit=10"
request({url:url1,json:true},(error,response)=>{
    try{
    console.log(response.body.features[9].center[0]+","+response.body.features[9].center[1])
    }
    catch(e)
    {console.log(error+"4352")}
})
