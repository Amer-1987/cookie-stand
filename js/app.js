'use strict';

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let cookiesShop = [];

function Shop(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.randomCustomers = 0;
    this.avgCookiesperHour = [];


    cookiesShop.push(this);

}

let total = 0;


Shop.prototype.getCustomers = function () {
    return (this.randomCustomers = random(23, 65));


}

Shop.prototype.getcookies = function () {
    for (let i = 0; i < hours.length; i++) {
        //  this.avgCookiesperHour [i]= [this.randomCustomers * this.avg];
        let randomNum = Math.floor(this.getCustomers() * this.avg)
        console.log(Math.floor(this.randomCustomers * this.avg));
        console.log(this.avgCookiesperHour);
        this.avgCookiesperHour.push(randomNum);
    }
}


let seattle = new Shop('seattle', 23, 65, 6.3);
let tokyo = new Shop('tokyo', 3, 24, 1.2);
let dubai = new Shop('dubai', 11, 38, 3.7);
let paris = new Shop('paris', 20, 38, 2.3);
let lima = new Shop('lima', 2, 16, 4.6);


let parent = document.getElementById('TheParent');
let articleElement = document.createElement('p');
parent.appendChild(articleElement);
//articleElement.textContent = "jffff";


let table = document.createElement('table');
parent.appendChild(table);

let hRow = document.createElement('tr');
table.appendChild(hRow);
hRow.textContent = "shops";


for (let i = 0; i < hours.length; i++) {
    let thElement = document.createElement('th');
    hRow.appendChild(thElement);
    thElement.textContent = hours[i];
}

Shop.prototype.getFinal = function () {
    let dRow = document.createElement('tr');
    table.appendChild(dRow);

    for (let i = 0; i < hours.length; i++) {


        let td1 = document.createElement('td');
        dRow.appendChild(td1);
        td1.textContent = this.avgCookiesperHour[i];

    }
}

let hRow2 = document.createElement('tr');
table.appendChild(hRow2);

for (let i = 0; i < hours.length; i++) {
    let thElement = document.createElement('th');
    hRow.appendChild(thElement);

    //articleElement.textContent = "tot";
    
}



seattle.getCustomers();
seattle.getcookies();

total += seattle.avgCookiesperHour;
    console.log(total);


tokyo.getCustomers();
tokyo.getcookies();

dubai.getCustomers();
dubai.getcookies();

paris.getCustomers();
paris.getcookies();

lima.getCustomers();
lima.getcookies();

seattle.getFinal();
tokyo.getFinal();
dubai.getFinal();
paris.getFinal();
lima.getFinal();


console.log(cookiesShop);





