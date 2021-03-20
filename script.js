var restUrl = "https://restcountries.eu/rest/v2/all";
//var WheatherUrl = "api.openweathermap.org/data/2.5/weather?q=+"name"+&appid=c7a9299a3d8da1d910da08bcffb48a3b";
let container = document.getElementById("row");
async function getData(){
    var restCou = await fetch(restUrl);
    var counData = await restCou.json();
    console.log(counData);
    
    counData.forEach(element => {
        console.log(element.name);
        console.log(element.flag);
        console.log(element.capital);
        console.log(element.region);
        console.log(element.population);
        console.log("    ");

        var div = document.createElement('div');
        div.innerHTML += `
            <div class="card  col-md-6 col-lg-4 col-sm-12 border" style="max-width: 18rem;" >
                <img class="card-img-top" src="${element.flag}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">Capital : ${element.capital}</p>
                    <p class="card-text">Region : ${element.region}</p>
                    <p class="card-text">Population : ${element.population}</p>
                </div>
            </div>
        
        
        
        
        
        
        `
        container.append(div)
        
        
        
    });
}
getData();