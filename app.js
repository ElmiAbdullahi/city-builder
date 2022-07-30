// import functions and grab DOM elements
const waterDropdownEl = document.getElementById ('water-dropdown');
const cityDropdownEl = document.getElementById ('city-dropdown');
const countryDropdownEl = document.getElementById ('country-dropdown');
const cityImgTag = document.getElementById ('city-img');
const waterImgTag = document.getElementById ('water-img');
const countryImgTag = document.getElementById ('country-img');
const timesChangedEl = document.getElementById ('times-changed');
const sloganInputEl = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');
// console.log('SLOGAN', sloganInputEl, sloganButton, slogansEl);

// let state
let timesWaterChanged = 0;
let timesCityChanged = 0;
let timesCountryChanged = 0;

let slogans = ['you made it' , 'welcome'];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const slogansEl = document.getElementById('slogans');

sloganButton.addEventListener('click', () => {
    
    const newSlogan = sloganInputEl.value;
  
    
    slogans.push(newSlogan);
  
    displaySlogans();
  
    sloganInputEl.value = '';
});

waterDropdownEl.addEventListener('change' , () => {

    console.log(waterDropdownEl.value);
    waterImgTag.src = `assets/${waterDropdownEl.value}.png`;

    timesWaterChanged++;

    displayStats();
});

cityDropdownEl.addEventListener('change' , () => {

    console.log(cityDropdownEl.value);
    cityImgTag.src = `assets/${cityDropdownEl.value}.png`;

    timesCityChanged++;

    displayStats();

});

countryDropdownEl.addEventListener('change' , () => {

    console.log(countryDropdownEl.value);
    countryImgTag.src = `assets/${countryDropdownEl.value}.png`;

    timesCountryChanged++;

    displayStats();

});

function displayStats() {
    timesChangedEl.textContent = `you changed the water ${timesWaterChanged} times, the city ${timesCityChanged} times, and the country ${timesCountryChanged} times`;
}


function displaySlogans() { slogansEl.textContent = '';

    for (let slogan of slogans) {
        const sloganEl = document.createElement('p');

        sloganEl.textContent = slogan;
        sloganEl.classList.add('slogan');
        slogansEl.append(sloganEl);
}
}

displaySlogans();




