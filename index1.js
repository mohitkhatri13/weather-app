console.log("hello g ");
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

function renderweatherinfo(data){
    let newpara = document.createElement('p');
    newpara.textContent = `${data?.main?.temp.toFixed(2)} °C`
    document.body.appendChild(newpara);
}
async function featcherweatherdetails() {
    try {

        let city = "goa";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        const data = await response.json();
        console.log("Weather data ", data);
        renderweatherinfo(data);
      
    }
    catch (err) {

    }
}

async function getcustomweatherdetail() {
    try {
        let latitude = 15.333;
        let longitude = 74.3223;

        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?
        lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

        let data = await result.json();
        console.log(data);
        renderweatherinfo(data);
    }
    catch (err) {
        // console.log("not represent any location");
        console.log("Error found ", err);
    }

}
