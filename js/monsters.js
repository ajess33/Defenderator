'use strict';

var monsters = {

  'Skeleton': {
    'strength': 10,
    'dexterity': 14,
    'constitution': 15,
    'inteligence': 6,
    'wisdom': 8,
    'charisma': 5,
    'averagehp' : 9,
    'speed' : 30,
    'armorclass' : 13,
    'proficiency' : 2,
    'averagedamage' : 3,
    'notesAbout' : 'Damage Vulnerabilities: bludgeoning. Damage Immunities: poison. Condition Immunities: exhaustion, poisoned. Senses: darkvision 60ft.',
  },
  'Goblin' : {
    'strength': 8,
    'dexterity': 14,
    'constitution': 10,
    'inteligence': 10,
    'wisdom': 8,
    'charisma': 8,
    'averagehp' : 7,
    'speed' : 30,
    'armorclass' : 15,
    'proficiency' : 2,
    'averagedamage' : 3,
    'notesAbout' : 'Senses: Darkvision 60ft. Nimble Escape: The Goblin can take a Disengage or Hide action as a bonous action on each of its turns.',
  },
  'Animated Armor' : {
    'strength': 14,
    'dexterity': 11,
    'constitution': 13,
    'inteligence': 1,
    'wisdom': 3,
    'charisma': 1,
    'averagehp' : 33,
    'speed' : 25,
    'armorclass' : 18,
    'proficiency' : 2,
    'averagedamage' : 3,
    'notesAbout' : 'Damage Immunities: poison, psychic. Condition Immunitites: blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned. Senses: Blindsight 60ft (blind beyond radius). Antimagic Suseptibility: The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster\'s spell save DC or fall unconscious for 1 minute. False Appearance. While the armor remains motionless, it is indistinguishable from a normal suit of armor.'
  },
  'Orc' : {
    'strength': 16,
    'dexterity': 12,
    'constitution': 16,
    'inteligence': 7,
    'wisdom': 11,
    'charisma': 10,
    'averagehp' : 15,
    'speed' : 30,
    'armorclass' : 15,
    'proficiency' : 2,
    'averagedamage' : 7,
    'notesAbout' : 'Senses: Darkvision 60ft. Aggressive. As a bonus action, the orc can move up to its speed toward a hostile creature that it can see'
  },
  'Dire Wolf' : {
    'strength': 17,
    'dexterity': 15,
    'constitution': 13,
    'inteligence': 3,
    'wisdom': 12,
    'charisma': 7,
    'averagehp' : 37,
    'speed' : 50,
    'armorclass' : 14,
    'proficiency' : 2,
    'averagedamage' : 7,
    'notesAbout' : 'Keen Hearing and Smell: The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell. Pack Tactics: The wolf has advantage on an attack roll against a creature if at least one of the wolf\'s allies is within 5 feet of the creature and the ally isn\'t incapacitated. Attack Effect: If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.'
  }

};
