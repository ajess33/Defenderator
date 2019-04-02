'use strict';

MakeMonster.all = [];

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
  this.hitdie = monsterType.averagehp;
  this.speed = monsterType.speed;
  this.armorclass = monsterType.armorclass;
  this.notesAbout = monsterType.notesAbout;
  this.hitbonus = this.strMod + monsterType.proficiency;
  this.proficiency = monsterType.proficiency;
  this.averagedamage = monsterType.averagedamage;
  this.increment = increment;

  // push each new monster to an array
  MakeMonster.all.push(this);
}

// var increment = 1;

MakeMonster.prototype.baseStatUp = function() {
  if (this.increment >= 4) {
    this.strength += 1;
    this.dexterity += 1;
    this.constitution += 1;
    this.wisdom += 1;
    this.charisma += 1;
  }
  if (this.increment >= 8) {
    this.strength += 2;
    this.dexterity += 2;
    this.constitution += 2;
    this.wisdom += 2;
    this.charisma += 2;
  }
  if (this.increment >= 12) {
    this.strength += 3;
    this.dexterity += 3;
    this.constitution += 3;
    this.wisdom += 3;
    this.charisma += 3;
  }
  if (this.increment >= 16) {
    this.strength += 4;
    this.dexterity += 4;
    this.constitution += 4;
    this.wisdom += 4;
    this.charisma += 4;
  }
  if (this.increment >= 20) {
    this.strength += 5;
    this.dexterity += 5;
    this.constitution += 5;
    this.wisdom += 5;
    this.charisma += 5;
  }
};

MakeMonster.prototype.totalhealth = function() {
  this.avghp +
    this.avghp * 0.5 * this.increment +
    this.conMod * (this.increment + 1);
};

var elName = document.getElementById('name-select');
var elMonsterSelect = document.getElementById('monster-select');
var elLevelSelect = document.getElementById('level-select');
var elCreateForm = document.getElementById('create-enemy');

elCreateForm.addEventListener('submit', handleSubmit);

// Populate dropdown

function handleSubmit(e) {
  e.preventDefault();
  var monsterName = elName.value;
  var monsterSelected =
    elMonsterSelect.options[elMonsterSelect.selectedIndex].value;
  var levelSelected = elLevelSelect.options[elLevelSelect.selectedIndex].value;

  var newMonster = new MakeMonster(
    monsters[monsterSelected],
    monsterName,
    levelSelected
  );

  displayChart(newMonster);
}

function displayChart(monster) {
  var resultsWrapper = document.getElementById('results-display');
  var canvas = document.getElementById('monster-graph').getContext('2d');

  var labelsArray = Object.keys(monster);
  var valuesArray = Object.values(monster);
  console.log(labelsArray);
  console.log(valuesArray);

  // var chart = new Chart(canvas, {
  //   type: 'bar',

  //   data: {
  //     labels: labelsArray,
  //     datasets: {
  //       label: 'Monster Stats',
  //       data: valuesArray
  //     }
  //   }
  // });
}
