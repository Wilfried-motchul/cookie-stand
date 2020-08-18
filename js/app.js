'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function getRandomCustNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  // the max is inclusive and the min is also also inclusive
}

function Shop(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookiesPerHrArray = [];
  this.totalDalySales = 0;
}

Shop.prototype.calCustPrHr = function () {
  for (var i = 0; i < hours.length; i++) {
    var hourlyCookie = Math.ceil(getRandomCustNumber(this.minCust, this.maxCust) * this.avgCookie);
    this.cookiesPerHrArray.push(hourlyCookie);
    this.totalDalySales += hourlyCookie;
    console.log(this.totalDalySales);
  }
  return this.cookiesPerHrArray;
};
var seattle = new Shop('Seattle',23,65,6.3);
var tokyo = new Shop('Tokyo',3,24,2.1);
var dubai = new Shop('Dubai',11,38,3.7);
var paris= new Shop('Paris',20,38,2.3);
var lima = new Shop('Lima',2,165,4.6);
var jamaica = new Shop('jamaica',2,100,3.5);



// var seattle = {
//   name: 'seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   cookiesPerHrArray: [],
//   totalDalySales: 0,
//   getRandomCustNumber: function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//     // the max is inclusive and the min is also also inclusive
//   },
//   calCustPrHr: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCookie = Math.ceil(this.getRandomCustNumber(this.minCust, this.maxCust) * this.avgCookie);
//       this.cookiesPerHrArray.push(hourlyCookie);
//       this.totalDalySales += hourlyCookie;
//       console.log(this.totalDalySales);
//     }
//   }
// };

// // seattle.calCustPrHr();

// var tokyo = {
//   name: 'tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
//   cookiesPerHrArray: [],
//   totalDalySales: 0,
//   getRandomCustNumber: function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//     // the max is inclusive and the min is also also inclusive 
//   },
//   calCustPrHr: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCookie = Math.ceil(this.getRandomCustNumber(this.minCust, this.maxCust) * this.avgCookie);
//       this.cookiesPerHrArray.push(hourlyCookie);
//       this.totalDalySales += hourlyCookie;
//       console.log(this.totalDalySales);
//     }
//   }
// };

// var dubai = {
//   name: 'dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookie: 3.7,
//   cookiesPerHrArray: [],
//   totalDalySales: 0,
//   getRandomCustNumber: function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//     // the max is inclusive and the min is also also inclusive 
//   },
//   calCustPrHr: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCookie = Math.ceil(this.getRandomCustNumber(this.minCust, this.maxCust) * this.avgCookie);
//       this.cookiesPerHrArray.push(hourlyCookie);
//       this.totalDalySales += hourlyCookie;
//       console.log(this.totalDalySales);
//     }
//   }
// };

// var paris = {
//   name: 'paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookie: 2.3,
//   cookiesPerHrArray: [],
//   totalDalySales: 0,
//   getRandomCustNumber: function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//     // the max is inclusive and the min is also also inclusive 
//   },
//   calCustPrHr: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCookie = Math.ceil(this.getRandomCustNumber(this.minCust, this.maxCust) * this.avgCookie);
//       this.cookiesPerHrArray.push(hourlyCookie);
//       this.totalDalySales += hourlyCookie;
//       console.log(this.totalDalySales);
//     }
//   }
// };

// var lima = {
//   name: 'lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookie: 4.6,
//   cookiesPerHrArray: [],
//   totalDalySales: 0,
//   getRandomCustNumber: function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//     // the max is inclusive and the min is also also inclusive
//   },
//   calCustPrHr: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCookie = Math.ceil(this.getRandomCustNumber(this.minCust, this.maxCust) * this.avgCookie);
//       this.cookiesPerHrArray.push(hourlyCookie);
//       this.totalDalySales += hourlyCookie;
//       console.log(this.totalDalySales);
//     }
//   }
// };


function renderHeader(){
  var trElHeader = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = ' ';
  trElHeader.appendChild(thEl);
  for( var i = 0 ; i < hours.length; i++){
    var thEl1 = document.createElement('th');
    thEl1.textContent = hours[i];
    trElHeader.appendChild(thEl1);
  }
  var thEl2 = document.createElement('th');
  thEl2.textContent = 'Total';
  trElHeader.appendChild(thEl2);
  table.appendChild(trElHeader);
}

function renderStoreTotal (row, int){
  var tdEl = document.createElement('td');
  tdEl.textContent = int;
  row.appendChild(tdEl);
}

function renderFooter (){
  var trEl = document.createElement('tr');
  table.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Daily Total';
  trEl.appendChild(tdEl);
  var runingTotal;
  for(var i = 0 ; i < hours.length; i++){
    var tdEl1 = document.createElement('td');
    var total = 0 ;
    for(var j = 0 ; j < cities.length; j++){
      total+= cities[j].cookiesPerHrArray[i];
      runingTotal += cities[j].cookiesPerHrArray[i];
    }
    tdEl1.textContent = total;
    trEl.appendChild(tdEl1);
  }
  var tdEl2 = document.createElement('td');
  tdEl2.textContent = runingTotal;
  trEl.appendChild(tdEl2);
}



var cities = [seattle, tokyo, dubai, paris, lima, jamaica];
var section = document.getElementById('sales-list');
var table = document.createElement('table');
section.appendChild(table);



// render tabel contents
renderHeader();
for(var i = 0; i < cities.length; i++){
  cities[i].calCustPrHr();

  console.log(seattle.cookiesPerHrArray);

  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');

  tdEl.textContent = cities[i].name;
  trEl.appendChild(tdEl);

  var storeTotal = 0;

  for(var j = 0 ; j < cities[i].cookiesPerHrArray.length; j++){
    tdEl = document.createElement('td');
    tdEl.textContent = cities[i].cookiesPerHrArray[j];
    trEl.appendChild(tdEl);
    storeTotal += cities[i].cookiesPerHrArray[j];
  }

  renderStoreTotal(trEl, storeTotal);
  table.append(trEl);
}

renderFooter();









// for (var k = 0; k < cities.length; k++) {
//   cities[k].calCustPrHr();

//   var divEl = document.createElement('div');
//   divEl.textContent = cities[k].name;
//   section.append(divEl);

//   var ulEl = document.createElement('ul');
//   divEl.appendChild(ulEl);
//   for (var j = 0; j < cities[k].cookiesPerHrArray.length; j++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${hours[j]}: ${cities[k].cookiesPerHrArray[j]} cookies`;
//     ulEl.appendChild(liEl);
//   }
//   var liElTotal = document.createElement('li');
//   liElTotal.textContent = `total: ${cities[k].totalDalySales}`;
//   ulEl.appendChild(liElTotal);
// }


