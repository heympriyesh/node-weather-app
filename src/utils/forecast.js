const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url='https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&exclude=hourly,daily&appid=660439aa4eea184e3c5a0fcde12c6ab5&units=metric'
    request({url:url,json:true},(error,{body})=>{
        const temper=body.current.temp
        if(error){
            callback('Unable to Connect to Weather service',undefined)
        }else if(body.error){
            callback('Unable to find location',undefined)
        }else{
            callback(undefined,'Currently the temperature is '+temper+ ' degree')   
        }
    })
}
module.exports=forecast