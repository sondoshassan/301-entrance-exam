'use strict';
// global var 
var form = document.getElementById('form');
var list = document.getElementById('list');
var remove = document.getElementById('remove');
var action;
var date;
var objArr = [];
remove.addEventListener('click',forRemove);
form.addEventListener('submit',whenSubmit);

function whenSubmit(event){
  event.preventDefault();
  action = event.target.work.value;
  date = event.target.start.value;
  new Scdeual(action,date);
  set();
}

function Scdeual(action,date){
  this.action = action;
  this.date = date;
  objArr.push(this);
  this.numList();
}

Scdeual.prototype.numList = function(){
  render();};

function render() {
  list.innerHTML = '';
  remove.innerHTML = '';
  for (var i = 0; i < objArr.length; i++) {
    var li = document.createElement('li');
    li.textContent = `${objArr[i].action}`;
    var para = document.createElement('p');
    para.textContent = `${objArr[i].date}`;
    var liRemove = document.createElement('li');
    liRemove.textContent = 'X';
    remove.appendChild(liRemove);
    liRemove.setAttribute('id',i);
    list.appendChild(li);
    list.appendChild(para);
  }
}
function forRemove(event){
  event.preventDefault();
  var removeItem = event.target.id;
  objArr.splice(removeItem,1);
  set();
  render();
}

function set(){
  var str = JSON.stringify(objArr);
  localStorage.setItem('go',str);
}
function get(){
  var newFromMemory = localStorage.getItem('go');
  if (newFromMemory){
    objArr = JSON.parse(newFromMemory);
    render();
  }
}
get();

// do the date 
var n =  new Date();
var y = n.getFullYear();
// var m = n.getMonth() + 1;
var month = new Array();
month[0] = 'Jan';
month[1] = 'Feb';
month[2] = 'Mar';
month[3] = 'April';
month[4] = 'May';
month[5] = 'June';
month[6] = 'July';
month[7] = 'Aug';
month[8] = 'Sep';
month[9] = 'Oct';
month[10] = 'Nov';
month[11] = 'Dec';

var m = month[n.getMonth()];
var d = n.getDate();
document.getElementById('topdate').innerHTML = m + ' ' + d + ' ' + y;