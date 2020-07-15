//const { response } = require("express")

console.log('Client side javaScript is loaded')
fetch('https://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
         console.log(data)
    })
})

// fetch('http://localhost:3000/weather?address=noida').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         }else{
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })

const weatherForm=document.querySelector('form')
const serach=document.querySelector('input')
const messageOne=document.getElementById('message-1')
const messageTwo=document.getElementById('message-2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault() 
    console.log()
    const location=serach.value

    messageOne.textContent='Loading..'
    messageTwo.textContent=''

    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent=data.error
        }else{
            messageOne.textContent=data.location
            messageTwo.textContent=data.forecast
        }
    })
})

    // console.log(location)
})