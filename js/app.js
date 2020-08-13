'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



var seattle = {
  name: 'seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  cookiesPerHrArray: [],
  totalDalySales: 0,
  getRandomCustNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // the max is inclusive and the min is also also inclusive 
  },
  calCustPrHr: function(){
    for (var i = 0; i < hours.length; i++) {
      var hourlyCookie = Math.ceil(this.getRandomCustNumber(this.minCust, this.maxCust) * this.avgCookie);
      this.cookiesPerHrArray.push(hourlyCookie);
      this.totalDalySales += hourlyCookie;
      console.log(this.totalDalySales);
    }
  }
};

// seattle.calCustPrHr();

var tokyo = {
  name: 'tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  cookiesPerHrArray: [],
  totalDalySales: 0,
  getRandomCustNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // the max is inclusive and the min is also also inclusive 
  },
  calCustPrHr: function(){
    for (var i = 0; i < hours.length; i++) {
      var hourlyCookie = Math.ceil(this.getRandomCustNumber(this.minCust, this.maxCust) * this.avgCookie);
      this.cookiesPerHrArray.push(hourlyCookie);
      this.totalDalySales += hourlyCookie;
      console.log(this.totalDalySales);
    }
  }
};

var dubai = {
  name: 'dubai',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  cookiesPerHrArray: [],
  totalDalySales: 0,
  getRandomCustNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // the max is inclusive and the min is also also inclusive 
  },
  calCustPrHr: function(){
    for (var i = 0; i < hours.length; i++) {
      var hourlyCookie = Math.ceil(this.getRandomCustNumber(this.minCust, this.maxCust) * this.avgCookie);
      this.cookiesPerHrArray.push(hourlyCookie);
      this.totalDalySales += hourlyCookie;
      console.log(this.totalDalySales);
    }
  }
};

var paris = {
  name: 'paris',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  cookiesPerHrArray: [],
  totalDalySales: 0,
  getRandomCustNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // the max is inclusive and the min is also also inclusive 
  },
  calCustPrHr: function(){
    for (var i = 0; i < hours.length; i++) {
      var hourlyCookie = Math.ceil(this.getRandomCustNumber(this.minCust, this.maxCust) * this.avgCookie);
      this.cookiesPerHrArray.push(hourlyCookie);
      this.totalDalySales += hourlyCookie;
      console.log(this.totalDalySales);
    }
  }
};

var lima = {
  name: 'lima',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  cookiesPerHrArray: [],
  totalDalySales: 0,
  getRandomCustNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // the max is inclusive and the min is also also inclusive 
  },
  calCustPrHr: function(){
    for (var i = 0; i < hours.length; i++) {
      var hourlyCookie = Math.ceil(this.getRandomCustNumber(this.minCust, this.maxCust) * this.avgCookie);
      this.cookiesPerHrArray.push(hourlyCookie);
      this.totalDalySales += hourlyCookie;
      console.log(this.totalDalySales);
    }
  }
};

var cities = [seattle, tokyo, dubai, paris, lima];
for (var k = 0; k < cities.length; k++) {
  cities[k].calCustPrHr();

  var section = document.getElementById('sales-list');
  var divEl = document.createElement('div');
  divEl.textContent = cities[k].name;
  section.append(divEl);

  var ulEl = document.createElement('ul');
  divEl.appendChild(ulEl);
  for (var j = 0; j < cities[k].cookiesPerHrArray.length; j++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[j]}: ${cities[k].cookiesPerHrArray[j]} cookies`;
    ulEl.appendChild(liEl);
  }
  var liElTotal = document.createElement('li');
  liElTotal.textContent = `total: ${cities[k].totalDalySales}`;
  ulEl.appendChild(liElTotal);
}
