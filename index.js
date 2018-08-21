
function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
 
  BoardMember.prototype.veto = function(){
    return 'No, I must disagree'
  }
  
  BoardMember.prototype.approve = function(){
    return 'You can do that!'
  }
  
  BoardMember.prototype.doCharity = function(){
    return "I like to help people."
  }

  BoardMember.prototype.releasePressStatement = function(){
    return "You will see great things from Scuber."
  }

  BoardMember.prototype.sayHi = function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }
  
}




function Ceo(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
 
  Ceo.prototype.veto = function(){
    return 'No, I must disagree'
  }
  
  Ceo.prototype.approve = function(){
    return 'You can do that!'
  }
  
  Ceo.prototype.doCharity = function(){
    return "I like to help people."
  }

  Ceo.prototype.releasePressStatement = function(){
    return "You will see great things from Scuber."
  }

  Ceo.prototype.sayHi = function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }
  
  Ceo.prototype.hireEmployee = function(){
    return "Welcome aboard!";
  }

}
