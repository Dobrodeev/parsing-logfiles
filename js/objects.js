import {hello} from './module.js';
let val = hello();
console.log(val);
let user = {
    first: 'Brendan',
    last: 'Dayley',
    age: 30,
    "likes birds": true,
    getName: function(){
        return this.first + ' ' + this.last;
    }
}
console.log(user.getName());
function User(first, last){
    this.first = first;
    this.last = last;
    this.getName = function(){
        return this.first + ' ' + this.last;
    }
}
let user2 = new User('Brendan', 'Dayley');
console.log(user2.getName());
function UserP(first, last){
    this.first = first;
    this.last = last;
}
UserP.prototype = {
    getFullName: function(){
        return this.first + ' ' + this.last;
    }
}
let user3 = new UserP('Brendan', 'Dayley');
console.log(user3.getFullName());
console.log(user);
console.log(user.age);
delete user['likes birds'];
console.log(user);