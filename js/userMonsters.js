'use strict';

function loadUserMonsters(){
  if(localStorage['newMonster']){
    monsters = JSON.parse(localStorage['newMonster']);
  }

}

function populateDropdown() {
  var userMonsterNames = Object.keys(monsters);
  for(var i = 0; i < userMonsterNames.length; i++) {
    var newOption = document.createElement('option');
    newOption.textContent = userMonsterNames[i];
    newOption.value = userMonsterNames[i];
    var monsterSelect = document.getElementById('monster-select');
    monsterSelect.appendChild(newOption);
  }
}

loadUserMonsters();
populateDropdown();