var monsters = [
	'Owlbear',
	'Slime',
	'Large Wolf',
	'Direbear',
	'Manticore',
	'Dragon'
]

var types = [
	'Flaming',
	'Electric',
	'Poisoning',
	'Freezing',
	'Acidic',
	'Undead'
]

var attributes = [
	'Burrowing',
	'Flying',
	'Teleporting',
	'Exploding',
	'Regenerating',
	'Fortified'
]

var monster;
var stats = {};

module.exports = {
	createMonster:function(tf){
		monster = [];
		monster[0] = types[Math.floor(Math.random() * 10000000000) % 6];
		console.log(monster[0]);
		monster[1] = attributes[Math.floor(Math.random() * 10000000000) % 6];
		console.log(monster[1]);
		monster[2] = monsters[Math.floor(Math.random() * 10000000000) % 6];
		console.log(monster[2]);

		return "Your monster will be a "
	 	+ monster[0] + ", " + monster[1] + ", " + monster[2] + ".";
	},

	generateMonster:function(lvl){
    stats = [];
    for(var i = 0; i < 6; i++){
      stats[i] = rollStat() + lvl;
      console.log(stats[i]);
    }
    getAttribute(monster[1]);
    stats[6] = 0;
    return monster[0] + ', ' + monster[2] + '\n'
    + 'HP: ' + (rollHealth(lvl) + Math.floor((stats[2] - 10)/2)*lvl) + '\n'
    + 'AC: ' + (13 + Math.floor((stats[2] - 10)/2) + stats[6])+ '\n'
    + 'STR: ' + (stats[0]) + ' (+' + Math.floor((stats[0] - 10)/2) + ')\n'
    + 'DEX: ' + (stats[1]) + ' (+' + Math.floor((stats[1] - 10)/2) + ')\n'
    + 'CON: ' + (stats[2]) + ' (+' + Math.floor((stats[2] - 10)/2) + ')\n'
    + 'INT: ' + (stats[3]) + ' (+' + Math.floor((stats[3] - 10)/2) + ')\n'
    + 'WIS: ' + (stats[4]) + ' (+' + Math.floor((stats[4] - 10)/2) + ')\n'
    + 'CHA: ' + (stats[5]) + ' (+' + Math.floor((stats[5] - 10)/2) + ')\n'
    + getAttribute(monster[1]);
	}

}

function rollStat(){
  var outcome = 0;
  for(var i = 0; i < 4; i++){
    outcome += Math.floor(Math.random() * 10000000000) % 6;
  }
  return outcome;
}

function rollHealth(lvl){
  var outcome = Math.floor(Math.random() * 10000000000) % 6;
  for(var i = 0; i < lvl; i++){
    outcome += Math.floor(Math.random() * 10000000000) % 6;
  }
  return outcome;
}

var attrs = [
	"Burrowing: Monster can tunnel underground.\n",
	"Flying: Monster can fly up to 30 ft in the air.\n",
	"Teleporting: Monster can teleport to a spot 30 ft away, +2 to DEX saving throws.\n",
	"Exploding: When Monster is defeated, it explodes in a 15 ft radius, DC 15 saving throw or take 2d6 elemental damage.\n",
	"Regenerating: At the beggining of the monsters turn it regains 10 HP.\n",
	"Fortified: The monster has +3 AC.\n"
]
function getAttribute(attribute){
	for(var i = 0; i < 6; i++){
		if(attributes[i] === attribute){
      if(i === 5){
        stats[6] = 3;
      }
			return attrs[i];
		}
	}
}
