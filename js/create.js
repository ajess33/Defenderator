function handleForm(e){
    e.preventDefault();
    var name = e.target.name.value;
    var strength = parseInt(e.target.strength.value);
    var dexterity = parseInt(e.target.dexterity.value);
    var constitution = parseInt(e.target.constitution.value);
    var intelligence = e.target.intelligence.value;
    var wisdom = parseInt(e.target.wisdom.value);
    var charisma = parseInt(e.target.charisma.value);
    var average_hp = parseInt(e.target.average_hp.value);
    var speed = e.target.speed.value;
    var armor_class = parseInt(e.target.armor_class.value);
    var proficiency = parseInt(e.target.proficiency.value);
    var average_damage = parseInt(e.target.average_damage.value);
    var notes = e.target.notes.value;
    document.getElementById('createNewMonster');
    var newMonster = MakeMonster(name,strength,dexterity,constitution,intelligence,wisdom,charisma,average_hp,speed,armor_class,proficiency,average_damage,notes)
}