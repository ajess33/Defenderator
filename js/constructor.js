'use strict';

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
