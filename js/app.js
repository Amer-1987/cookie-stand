'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let numOfTotCookies = 0;


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let seattleShop = {
    name: 'seattle :',
    min: 23,
    max: 65,
    avg: 6.3,
    randomCustomers: [],
    avgCookiesperHour: [],

    getCustomers: function () {
        this.randomCustomers = random(23, 65);
        console.log(this.randomCustomers);
        return this.randomCustomers = random(23, 65);

    },

    getCookies: function () {
        this.avgCookiesperHour = [this.randomCustomers * seattleShop.avg];
        console.log(Math.ceil(this.avgCookiesperHour));


    },

    getFinal: function () {
        let parent = document.getElementById('TheParent');

        let articleElement = document.createElement('p');
        parent.appendChild(articleElement);

        articleElement.textContent = this.name;

        let imageElement=document.createElement('img');
        articleElement.appendChild(imageElement);
        imageElement.setAttribute('src','img/seattleshop.jpg');

        let ulElement = document.createElement('ul');
        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            this.avgCookiesperHour[i] = this.getCustomers();
            let totalOfAvg = Math.round(this.avg * this.avgCookiesperHour[i]);
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[i]}: ` + totalOfAvg + ' Cookies';
            numOfTotCookies += totalOfAvg;
            if (i === 14) {
                let liElement = document.createElement('li');
                ulElement.appendChild(liElement);
                liElement.textContent = 'The Total: ' + numOfTotCookies + ' Cookies.';
            }
        }
    },
}

seattleShop.getFinal();
seattleShop.getCustomers();
seattleShop.getCookies();


let tokyoShop = {
    name: 'tokyo :',
    min: 3,
    max: 24,
    avg: 1.2,
    randomCustomers: [],
    avgCookiesperHour: [],

    getCustomers: function () {
        this.randomCustomers = random(3, 24);
        console.log(this.randomCustomers);
        return this.randomCustomers = random(3, 24);
    },

    getCookies: function () {
        this.avgCookiesperHour = [this.randomCustomers * tokyoShop.avg];
        console.log(Math.ceil(this.avgCookiesperHour));
    },

    getFinal: function () {
        let parent = document.getElementById('TheParent');

        let articleElement = document.createElement('p');
        parent.appendChild(articleElement);
        articleElement.textContent = this.name;

        let ulElement = document.createElement('ul');
        parent.appendChild(ulElement);
        
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            this.avgCookiesperHour[i] = this.getCustomers();
            let totalOfAvg = Math.round(this.avg * this.avgCookiesperHour[i]);
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[i]}: ` + totalOfAvg + ' Cookies';
            numOfTotCookies += totalOfAvg;
            if (i === 14) {
                let liElement = document.createElement('li');
                ulElement.appendChild(liElement);
                liElement.textContent = 'The Total: ' + numOfTotCookies + ' Cookies.';
            }
        }
    },
}

tokyoShop.getFinal();
tokyoShop.getCustomers();
tokyoShop.getCookies();




let dubaiShop = {
    name: 'dubai :',
    min: 11,
    max: 38,
    avg: 3.7,
    randomCustomers: [],
    avgCookiesperHour: [],

    getCustomers: function () {
        this.randomCustomers = random(11, 38);
        console.log(this.randomCustomers);
        return this.randomCustomers = random(11, 38);

    },

    getCookies: function () {
        this.avgCookiesperHour = [this.randomCustomers * dubaiShop.avg];
        console.log(Math.ceil(this.avgCookiesperHour));
    },

    getFinal: function () {
        let parent = document.getElementById('TheParent');

        let articleElement = document.createElement('p');
        parent.appendChild(articleElement);
        articleElement.textContent = this.name;

        let ulElement = document.createElement('ul');
        parent.appendChild(ulElement);
        
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            this.avgCookiesperHour[i] = this.getCustomers();
            let totalOfAvg = Math.round(this.avg * this.avgCookiesperHour[i]);
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[i]}: ` + totalOfAvg + ' Cookies';
            numOfTotCookies += totalOfAvg;
            if (i === 14) {
                let liElement = document.createElement('li');
                ulElement.appendChild(liElement);
                liElement.textContent = 'The Total: ' + numOfTotCookies + ' Cookies.';
            }
        }
    },
}
dubaiShop.getFinal();
dubaiShop.getCustomers();
dubaiShop.getCookies();





let parisShop = {
    name: 'paris :',
    min: 20,
    max: 38,
    avg: 2.3,
    randomCustomers: [],
    avgCookiesperHour: [],

    getCustomers: function () {
        this.randomCustomers = random(20, 38);
        console.log(this.randomCustomers);
        return this.randomCustomers = random(20, 38);

    },

    getCookies: function () {
        this.avgCookiesperHour = [this.randomCustomers * parisShop.avg];
        console.log(Math.ceil(this.avgCookiesperHour));
    },

    getFinal: function () {
        let parent = document.getElementById('TheParent');

        let articleElement = document.createElement('p');
        parent.appendChild(articleElement);
        articleElement.textContent = this.name;

        let ulElement = document.createElement('ul');
        parent.appendChild(ulElement);
        
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            this.avgCookiesperHour[i] = this.getCustomers();
            let totalOfAvg = Math.round(this.avg * this.avgCookiesperHour[i]);
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[i]}: ` + totalOfAvg + ' Cookies';
            numOfTotCookies += totalOfAvg;
            if (i === 14) {
                let liElement = document.createElement('li');
                ulElement.appendChild(liElement);
                liElement.textContent = 'The Total: ' + numOfTotCookies + ' Cookies.';
            }
        }
    },
}
parisShop.getFinal();
parisShop.getCustomers();
parisShop.getCookies();






let LimaShop = {
    name: 'Lima :',
    min: 2,
    max: 16,
    avg: 4.6,
    randomCustomers: [],
    avgCookiesperHour: [],

    getCustomers: function () {
        this.randomCustomers = random(2, 16);
        console.log(this.randomCustomers);
        return this.randomCustomers = random(2, 16);

    },

    getCookies: function () {
        this.avgCookiesperHour = [this.randomCustomers * LimaShop.avg];
        console.log(Math.ceil(this.avgCookiesperHour));
    },

    getFinal: function () {
        let parent = document.getElementById('TheParent');

        let articleElement = document.createElement('p');
        parent.appendChild(articleElement);
        articleElement.textContent = this.name;

        let ulElement = document.createElement('ul');
        parent.appendChild(ulElement);
        
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            this.avgCookiesperHour[i] = this.getCustomers();
            let totalOfAvg = Math.round(this.avg * this.avgCookiesperHour[i]);
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[i]}: ` + totalOfAvg + ' Cookies';
            numOfTotCookies += totalOfAvg;
            if (i === 14) {
                let liElement = document.createElement('li');
                ulElement.appendChild(liElement);
                liElement.textContent = 'The Total: ' + numOfTotCookies + ' Cookies.';
            }
        }
    },
}
LimaShop.getFinal();
LimaShop.getCustomers();
LimaShop.getCookies();


