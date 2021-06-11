// Write your JavaScript code here!
window.addEventListener("load", function () {
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
      } else if (isNaN(pilotName.value) !== true || isNaN(copilotName.value) !== true || isNaN(fuelLevel.value) !== false || isNaN(cargoMass.value) !== false) {
         alert("Make sure to enter valid information for each field!");
      }

   


   })

})

// let randomNumber = Math.round(Math.random() * 10);
// console.log(randomNumber);


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
