'use strict';

MakeMonster.all = {};

function MakeMonster(monsterType, name, increment) {
  this.name = name;
  this.strength = monsterType.strength;
  this.strMod = Math.floor((monsterType.strength - 10) / 2);
  this.dexterity = monsterType.dexterity;
  this.dexMod = Math.floor((monsterType.dexterity - 10) / 2);
  this.constitution = monsterType.constitution;
  this.conMod = Math.floor((monsterType.constitution - 10) / 2);
  this.inteligence = monsterType.inteligence;
  this.intMod = Math.floor((monsterType.inteligence - 10) / 2);
  this.wisdom = monsterType.wisdom;
  this.wisMod = Math.floor((monsterType.wisdom - 10) / 2);
  this.charisma = monsterType.charisma;
  this.chaMod = Math.floor((monsterType.charisma - 10) / 2);
  this.averagehp = monsterType.averagehp;
  this.speed = monsterType.speed;
  this.armorclass = monsterType.armorclass;
  this.notesAbout = monsterType.notesAbout;
  this.hitbonus = this.strMod + monsterType.proficiency;
  this.proficiency = monsterType.proficiency;
  this.averagedamage = monsterType.averagedamage;
  this.increment = parseInt(increment);
  MakeMonster.all[this.name] = this;
  localStorage.setItem('MakeMonster.all', JSON.stringify(MakeMonster.all));

  // push each new monster to an array

  monsters[this.name] = this;
}

MakeMonster.prototype.baseStatUp = function () {
  if (this.increment >= 20) {
    this.strength += 5;
    this.dexterity += 5;
    this.constitution += 5;
    this.wisdom += 5;
    this.charisma += 5;
  } else if (this.increment >= 16) {
    this.strength += 4;
    this.dexterity += 4;
    this.constitution += 4;
    this.wisdom += 4;
    this.charisma += 4;
  } else if (this.increment >= 12) {
    this.strength += 3;
    this.dexterity += 3;
    this.constitution += 3;
    this.wisdom += 3;
    this.charisma += 3;
  } else if (this.increment >= 8) {
    this.strength += 2;
    this.dexterity += 2;
    this.constitution += 2;
    this.wisdom += 2;
    this.charisma += 2;
  } else if (this.increment >= 4) {
    this.strength += 1;
    this.dexterity += 1;
    this.constitution += 1;
    this.wisdom += 1;
    this.charisma += 1;
  }
};

MakeMonster.prototype.statModifiers = function () {
  this.strMod = Math.floor((this.strength - 10) / 2);
  this.dexMod = Math.floor((this.dexterity - 10) / 2);
  this.conMod = Math.floor((this.constitution - 10) / 2);
  this.intMod = Math.floor((this.inteligence - 10) / 2);
  this.wisMod = Math.floor((this.wisdom - 10) / 2);
  this.chaMod = Math.floor((this.charisma - 10) / 2);
};

MakeMonster.prototype.totalHealth = function () {
  this.averagehp =
    this.averagehp +
    Math.ceil(
      (this.averagehp * 0.5 * this.increment) + (this.conMod * (this.increment + 1))
    );
};

MakeMonster.prototype.totaldamage = function () {
  this.averagedamage =
    this.averagedamage +
    Math.ceil(
      (this.averagedamage * 0.25 * this.increment) +
      this.strMod + (this.increment + 1)
    );
};

MakeMonster.prototype.newProficiency = function () {
  this.proficiency =
    this.proficiency + Math.floor(this.proficiency * 0.25 * this.increment);
};

MakeMonster.prototype.newArmorClass = function () {
  this.armorclass =
    this.armorclass + this.dexMod + Math.floor(this.increment * 0.5);
};

MakeMonster.prototype.render = function () {
  this.baseStatUp();
  this.statModifiers();
  this.totalHealth();
  this.totaldamage();
  this.newProficiency();
  this.newArmorClass();
};

var loadData = function() {
  var monsterArray = Object.keys(MakeMonster.all);
  monsterArray.forEach(function(monster){
    addToSquad(MakeMonster.all[monster]);
    displayChart(MakeMonster.all[monster]);
    populateOtherStats(MakeMonster.all[monster]);
  });
};

if(localStorage['MakeMonster.all']) {
  MakeMonster.all = JSON.parse(localStorage['MakeMonster.all']);
  loadData();
}
