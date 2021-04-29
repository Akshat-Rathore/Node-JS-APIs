const http=require('https')
url="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWtzaGF0cnMiLCJhIjoiY2tueG0xZ2psMGJrbDJ2bzNxenU5bHBnaSJ9.GrthpVcms9pGFZGfofRDuQ&limit=10"
const request=http.request(url,(response)=>{
    let data=''
    response.on('data',(chunk)=>{
        data+=chunk.toString()
    })
    response.on('end',()=>{
        const body=JSON.parse(data)
        console.log(body)
    })
})
request.on('error',(error)=>{
    console.log('an error',error)
})
request.end()