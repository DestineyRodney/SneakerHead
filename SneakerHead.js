"use strict";

var sneakers = [
    {id: 1, name: 'Air Jordan I', brand: 'Jordan'},
    {id: 2, name: 'Air Jordan II', brand: 'Jordan'},
    {id: 3, name: 'Air Jordan III', brand: 'Jordan'},
    {id: 4, name: 'Air Jordan IV', brand: 'Jordan'},
    {id: 5, name: 'Air Jordan V', brand: 'Jordan'},
    {id: 6, name: 'Air Jordan VI', brand: 'Jordan'},
    {id: 7, name: 'Air Jordan VII', brand: 'Jordan'},
    {id: 8, name: 'Air force Ones', brand: 'Nike'},
    {id: 9, name: 'Adida Run', brand: 'Adidas'},
];

function renderSneaker(sneaker){
    var html = '<div>';
    html += '<span class="d-none">' + sneaker.id + '</span>';
    html += '<h1>' + sneaker.name + '</h1>';
    html += '<p>' + sneaker.brand + '</p>';
    html += '</div>';
    return html
}

function renderSneakers(sneakers){
    var html = '';
    for(var i = 0; i <= sneakers.length - 1; i++){
        html += renderSneaker(sneakers[i]);
    }
    return html;
}

function searchByBrand(e){
    e.preventDefault();
var filteredSneaker = [];
sneakers.forEach(function (sneaker){
    if(selectedBrand.value === sneaker.brand){
        filteredSneaker.push(sneaker);
    }
});
body.innerHTML = renderSneakers(filteredSneaker);
}

function searchByName (e) {
    e.preventDefault();
    var sneakerNameInput = sneakerInput.value;
    var filterSneakers = [];
    sneakers.forEach(function (sneaker) {
        if (sneaker.name.toLowerCase().includes(sneakerNameInput.toLowerCase())) {
            filterSneakers.push(sneaker);
        }
    })
    body.innerHTML = renderSneakers(filterSneakers);
}

var myObjectSeriallized = JSON.stringify(sneakers);
localStorage.setItem('mySneakers', myObjectSeriallized);
console.log(localStorage);

var myObjectDesteriallized = JSON.parse(localStorage.getItem('mySneakers'));
console.log(myObjectDesteriallized);

function addNewSneaker (e){
    var newSneakerName = document.getElementById('newSneakerName');
    var newSneakerBrand = document.getElementById('newSneakerBrand');
    e.preventDefault();
    var newSneaker = {
        id: sneakers.length + 1,
        name: newSneakerName.value.toString(),
        brand:  newSneakerBrand.value.toString(),
    }
    if(newSneaker.name === sneakers.name){
        console.log('already added')
    }else {
        sneakers.push(newSneaker);
    }
    body.innerHTML = renderSneakers(sneakers);
}

var body = document.getElementById('sneakers');
body.innerHTML = renderSneakers(sneakers);
var submitButton = document.getElementById('submit');
var selectedBrand = document.getElementById('brand');
submitButton.addEventListener('click', searchByBrand);

var sneakerInput = document.getElementById('input-name');
var searchByNameBtn = document.getElementById('name-btn');

searchByNameBtn.addEventListener('keyup', searchByName);

var newSneakerButton = document.getElementById('new-btn');
newSneakerButton.addEventListener('click', addNewSneaker)