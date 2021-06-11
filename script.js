// Write your JavaScript code here!
window.addEventListener("load", function () {
   let form = document.querySelector("form");

   form.addEventListener("submit", function (event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
      }
      else if (isNaN(pilotName.value) !== true || isNaN(copilotName.value) !== true || isNaN(fuelLevel.value) !== false || isNaN(cargoMass.value) !== false) {
         alert("Make sure to enter valid information for each field!");
      }
      else if (fuelLevel.value < 10000) {
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel level too low for launch";
         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
      }
      else if (cargoMass.value > 10000) {
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "Cargo mass too high for launch";
         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
      }
      else {
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
      }
   })

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         let missionTarget = document.getElementById("missionTarget");
         let randomNumber = Math.round(Math.random() * json.length);
         
       missionTarget.innerHTML = `
       <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[randomNumber].name}</li>
            <li>Diameter: ${json[randomNumber].diameter}</li>
            <li>Star: ${json[randomNumber].star}</li>
            <li>Distance from Earth: ${json[randomNumber].distance}</li>
            <li>Number of Moons: ${json[randomNumber].moons}</li>
         </ol>
         <img src="${json[randomNumber].image}">
      `;


      })
   })
})