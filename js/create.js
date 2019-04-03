function handleForm(e) {
  e.preventDefault();
  var name = e.target.name.value;
  var strength = parseInt(e.target.strength.value);
  var dexterity = parseInt(e.target.dexterity.value);
  var constitution = parseInt(e.target.constitution.value);
  var intelligence = parseInt(e.target.intelligence.value);
  var wisdom = parseInt(e.target.wisdom.value);
  var charisma = parseInt(e.target.charisma.value);
  var average_hp = parseInt(e.target.average_hp.value);
  var speed = parseInt(e.target.speed.value);
  var armor_class = parseInt(e.target.armor_class.value);
  var proficiency = parseInt(e.target.proficiency.value);
  var average_damage = parseInt(e.target.average_damage.value);
  var notes = e.target.notes.value;

  var monster = {
    name: name,
    strength: strength,
    dexterity: dexterity,
    constitution: constitution,
    intelligence: intelligence,
    wisdom: wisdom,
    charisma: charisma,
    average_hp: average_hp,
    speed: speed,
    armor_class: armor_class,
    proficiency: proficiency,
    average_damage: average_damage,
    notes: notes
  };
  localStorage

  monsters[name] = monster;
}
document
  .getElementById('createNewMonster').addEventListener('submit', handleForm);
