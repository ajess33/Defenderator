'use strict';

var userMonsters = {};

function loadUserMonsters() {
  userMonsters = JSON.parse(localStorage['newMonster']);
}

function populateDropdown() {
  console.log('i am running');
  var userMonsterNames = Object.keys(userMonsters);
  console.log(userMonsterNames);
  for (var i = 0; i < userMonsterNames.length; i++) {
    var newOption = document.createElement('option');
    newOption.textContent = userMonsterNames[i];
    newOption.value = userMonsterNames[i];
    var monsterSelect = document.getElementById('monster-select');
    monsterSelect.appendChild(newOption);
  }
}

loadUserMonsters();
populateDropdown();