//http://api.weatherapi.com/v1/current.json?key=1555be3431b34615a18200404230802&q=Mumbai&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField=document.querySelector(".time_location");
const conditionField = document.querySelector(".condition");
const searchField = document.querySelector(".search_area");
const form = document.querySelector('form')

form.addEventListener('submit' , searchForLocation)

let target='Lucknow'

const fetchResults= async (targetLocation)=>{
    let url =   `http://api.weatherapi.com/v1/current.json?key=1555be3431b34615a18200404230802&q=${targetLocation}&aqi=no`

    const res = await fetch(url)

    const data = await res.json()
    console.log(data)

    let locationName = data.location.name
    
    let temp = data.current.temp_c
    let condition = data.current.condition.text

    updateDetails(locationName,temp, condition)

    console.log(locationName)
}

function updateDetails(locationName,temp, condition,){
    locationField.innerHTML=locationName
    temperatureField.innerHTML=temp
    conditionField.innerHTML= condition

}


function searchForLocation(event){
    event.preventDefault()

    target = searchField.value

    fetchResults(target)
}
fetchResults(target)