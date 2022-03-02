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

var body = document.getElementById('sneakers');
body.innerHTML = renderSneakers(sneakers);
var submitButton = document.getElementById('submit');
var selectedBrand = document.getElementById('brand');
submitButton.addEventListener('click', searchByBrand);