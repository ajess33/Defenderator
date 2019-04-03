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
  this.averagehp = monsterType.averagehp;
  this.speed = monsterType.speed;
  this.armorclass = monsterType.armorclass;
  this.notesAbout = monsterType.notesAbout;
  this.hitbonus = this.strMod + monsterType.proficiency;
  this.proficiency = monsterType.proficiency;
  this.averagedamage = monsterType.averagedamage;
  this.increment = parseInt(increment);

  // push each new monster to an array
  MakeMonster.all.push(this);
}

// var increment = 1;

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
      this.averagehp * 0.5 * this.increment + this.conMod * (this.increment + 1)
    );
};

MakeMonster.prototype.totaldamage = function () {
  this.averagedamage =
    this.averagedamage +
    Math.ceil(
      this.averagedamage * 0.25 * this.increment +
      this.strMod * (this.increment + 1)
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

var elName = document.getElementById('name-select');
var elMonsterSelect = document.getElementById('monster-select');
var elLevelSelect = document.getElementById('level-select');
var elCreateForm = document.getElementById('create-enemy');

elCreateForm.addEventListener('submit', handleSubmit);

// Populate dropdown

function handleSubmit(e) {
  e.preventDefault();

  // clear the form!

  var monsterName = elName.value;
  var monsterSelected =
    elMonsterSelect.options[elMonsterSelect.selectedIndex].value;
  var levelSelected = elLevelSelect.options[elLevelSelect.selectedIndex].value;

  var newMonster = new MakeMonster(
    monsters[monsterSelected],
    monsterName,
    levelSelected
  );
  newMonster.render();
  addToSquad(newMonster);
  displayChart(newMonster);
  populateOtherStats(newMonster);
}

// CHART STUFF

function displayChart(monster) {
  var healthStat = monster.averagehp;
  var healthArray = [];
  healthArray.push(healthStat);

  Chart.defaults.global.defaultFontColor = '#a30a08';

  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Health'],
      datasets: [
        {
          label: 'Total Health',
          data: [healthStat],
          borderWidth: 1,
          backgroundColor: 'red'
        }
      ]
    },
    options: {
      legend: {
        labels: {
          fontSize: 180
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontSize: 120
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              fontSize: 120
            }
          }
        ]
      }
    }
  });

  var baseStats = [
    monster.strength,
    monster.dexterity,
    monster.constitution,
    monster.inteligence,
    monster.wisdom,
    monster.charisma
  ];

  var baseLabels = ['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'];

  var ctx2 = document.getElementById('myChart-base');
  var myBaseChart = new Chart(ctx2, {
    type: 'radar',
    data: {
      labels: ['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'],
      datasets: [
        {
          label: 'Basic Stats',
          data: [
            monster.strength,
            monster.dexterity,
            monster.constitution,
            monster.inteligence,
            monster.wisdom,
            monster.charisma
          ],

          borderWidth: 1
        }
      ]
    },
    options: {
      scale: {
        ticks: {
          min: 0,
          max: 20,
          stepSize: 2,
          fontSize: 25
        }
      },
      legend: {
        labels: {
          fontSize: 50
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              display: false
            }
          }
        ]
      }
    }
  });
}

function populateOtherStats(monster) {
  var attributesTitle = document.getElementById('attr-title');
  attributesTitle.classList.remove('ghost');
  var statsList = document.getElementById('other-atts');

  //while there are li's in the ul, removeChild
  while (statsList.firstChild) {
    statsList.removeChild(statsList.firstChild);
  }

  var statLabels = [
    'StrMod:',
    'DexMod:',
    'ConMod:',
    'IntMod:',
    'WisMod:',
    'ChaMod:',
    'Speed:',
    'ArmorClass:',
    'Notes:',
    'HitBonus:',
    'Proficiency:',
    'AverageDamage:'
  ];

  var otherStats = [
    monster.strMod,
    monster.dexMod,
    monster.conMod,
    monster.intMod,
    monster.wisMod,
    monster.chaMod,
    monster.speed,
    monster.armorclass,
    monster.notesAbout,
    monster.hitbonus,
    monster.proficiency,
    monster.averagedamage
  ];
  for (var i = 0; i < otherStats.length; i++) {
    var elLi = document.createElement('li');
    elLi.textContent = statLabels[i] + ' ' + otherStats[i];
    statsList.appendChild(elLi);

  }
}


// CREATED LIST STUFF

function addToSquad(monster) {
  var elSquadList = document.getElementById('created-list');
  var newSquadMember = document.createElement('li');
  newSquadMember.innerHTML = `${monster.name} - Adjustment: ${monster.increment} - <button>Show Stats</button>`;
  elSquadList.appendChild(newSquadMember);
}