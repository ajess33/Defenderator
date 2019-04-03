'use strict';
function handleForm(e) {
  e.preventDefault();
  var name = e.target.name.value;
  var strength = parseInt(e.target.strength.value);
  var dexterity = parseInt(e.target.dexterity.value);
  var constitution = parseInt(e.target.constitution.value);
  var inteligence = parseInt(e.target.inteligence.value);
  var wisdom = parseInt(e.target.wisdom.value);
  var charisma = parseInt(e.target.charisma.value);
  var averagehp = parseInt(e.target.averagehp.value);
  var speed = parseInt(e.target.speed.value);
  var armorclass = parseInt(e.target.armorclass.value);
  var proficiency = parseInt(e.target.proficiency.value);
  var averagedamage = parseInt(e.target.averagedamage.value);
  var type = e.target.type.value;
  var notes = e.target.notes.value;

  var monster = {
    name: name,
    strength: strength,
    dexterity: dexterity,
    constitution: constitution,
    inteligence: inteligence,
    wisdom: wisdom,
    charisma: charisma,
    averagehp: averagehp,
    speed: speed,
    armorclass: armorclass,
    proficiency: proficiency,
    averagedamage: averagedamage,
    type: type,
    notes: notes
  };
  monsters[monster.name] = monster;
  localStorage.setItem('newMonster', JSON.stringify(monsters));
  e.target.reset();
  window.location.href = 'display.html';
}
document.getElementById('createNewMonster').addEventListener('submit', handleForm);
