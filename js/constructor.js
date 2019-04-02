'use strict';


function MakeMonster (strength, dexterity, constitution, inteligence,
  wisdom, charisma, averagehp, speed, armorclass, notesAbout, proficiency, averagedamage) {

  this.strength = strength;
  this.strMod = Math.floor((strength - 10)/2);
  this.dexterity = dexterity;
  this.dexMod = Math.floor((dexterity - 10)/2);
  this.constitution = constitution;
  this.conMod = Math.floor((constitution - 10)/2);
  this.inteligence = inteligence;
  this.intMod = Math.floor((inteligence - 10)/2);
  this.wisdom = wisdom;
  this.wisMod = Math.floor((wisdom - 10)/2);
  this.charisma = charisma;
  this.chaMod = Math.floor((charisma - 10)/2);
  this.averagehp = averagehp;
  this.speed = speed;
  this.armorclass = armorclass;
  this.notesAbout = notesAbout;
  this.hitbonus = this.strMod + proficiency;
  this.proficiency = proficiency;
  this.averagedamage = averagedamage;
}

var increment = 1;

MakeMonster.prototype.baseStatUp = function(){
  if(increment >= 4){
    this.strength += 1;
    this.dexterity += 1;
    this.constitution += 1;
    this.wisdom += 1;
    this.charisma +=1;
  }
  if(increment >= 8){
    this.strength += 2;
    this.dexterity += 2;
    this.constitution += 2;
    this.wisdom += 2;
    this.charisma +=2;
  }
  if(increment >= 12){
    this.strength += 3;
    this.dexterity += 3;
    this.constitution += 3;
    this.wisdom += 3;
    this.charisma +=3;
  }
  if(increment >= 16){
    this.strength += 4;
    this.dexterity += 4;
    this.constitution += 4;
    this.wisdom += 4;
    this.charisma +=4;
  }
  if(increment >= 20){
    this.strength += 5;
    this.dexterity += 5;
    this.constitution += 5;
    this.wisdom += 5;
    this.charisma +=5;
  }
};

MakeMonster.prototype.totalhealth = function () {
  this.averagehp = this.averagehp + Math.ceil((this.averagehp * .5 * increment) + (this.conMod * (increment + 1)));
};

MakeMonster.prototype.totaldamage = function () {
  this.averagedame = this.averagedamage + Math.ceil((this.averagedamage * .25 * increment) + (this.strMod * (increment +1)));
};

MakeMonster.prototype.newProficiency = function () {
  this.proficiency = this.proficiency + Math.floor((this.proficiency * .25 * increment));
};

MakeMonster.prototype.newArmorClass = function () {
  this.armorclass = this.armorclass + (this.dexMod *(increment+1)) + Math.floor((increment *.5));
};

var elMonsterSelect = document.getElementById('monster-select');
var elLevelSelect = document.getElementById('level-select');
var elCreateForm = document.getElementById('create-enemy');

elCreateForm.addEventListener('submit', handleSubmit);

function handleSubmit() {
  // e.preventDefault();

  var monsterSelected =
    elMonsterSelect.options[elMonsterSelect.selectedIndex].value;
  var levelSelected = elLevelSelect.options[elLevelSelect.selectedIndex].value;
  console.log(monsterSelected, levelSelected);
}

