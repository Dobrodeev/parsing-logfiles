let user = {
    first: 'Brendan',
    last: 'Dayley',
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