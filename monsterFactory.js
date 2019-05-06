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

var add = [
	'Aggressive',
	'Invisible',
	'Life Draining',
	'Resistant',
	'Multiplying',
	'Vital'
]
var monster;
module.exports = {
	createMonster:function(){
		monster = [];

		monster[0] = Math.floor(Math.random() * 2);
		console.log(monster[0]);
		monster[1] = add[Math.floor(Math.random() * 10000000000) % 6];
		console.log(monster[1]);
		monster[2] = types[Math.floor(Math.random() * 10000000000) % 6];
		console.log(monster[2]);
		monster[3] = attributes[Math.floor(Math.random() * 10000000000) % 6];
		console.log(monster[3]);
		monster[4] = monsters[Math.floor(Math.random() * 10000000000) % 6];
		console.log(monster[4]);

		if(monster[0] === 0){
			return "You have hit a spot of bad luck... Your monster will be a "
			+ monster[1] + ", " + monster[2] + ", " + monster[3] + ", " + monster[4] + ".";
		}
		return "Your monster will be a "
	 	+ monster[2] + ", " + monster[3] + ", " + monster[4] + ".";
	},

	getMonsterSheet:function(){
		return "" +monster[2] + " " + getMonster(monster[4]) + getAttribute(monster[3]) + getLuck(monster[1], monster[0]);
	}

}

var mons = [
	"Owlbear\nAC: 13\nHP: 85\nSTR: 20(+5)\nDEX: 12(+1)\nCON: 17(+3)\nINT: 3(-4)\nWIS: 12(+1)\nCHA: 7(-2)\n",
	"Slime\nAC: 11\nHP: 66\nSTR: 15(+2)\nDEX: 10(+0)\nCON: 18(+4)\nINT: 3(-4)\nWIS: 6(-2)\nCHA: 3(-4)\n",
	"Large Wolf\nAC: 13\nHP: 75\nSTR: 18(+4)\nDEX: 13(+1)\nCON: 14(+2)\nINT: 7(-2)\nWIS: 12(+1)\nCHA: 8(-1)\n",
	"Direbear\nAC: 16\nHP: 94\nSTR: 22(+6)\nDEX: 12(+1)\nCON: 20(+5)\nINT: 3(-4)\nWIS: 15(+2)\nCHA: 7(-2)\n",
	"Manticore\nAC: 14\nHP: 85\nSTR: 17(+3)\nDEX: 16(+3)\nCON: 17(+3)\nINT: 7(-2)\nWIS: 12(+1)\nCHA: 8(-1)\n",
	"Dragon\nAC: 17\nHP: 94\nSTR: 23(+6)\nDEX: 10(+0)\nCON: 21(+5)\nINT: 14(+2)\nWIS: 11(+0)\nCHA: 19(+4)\n"
]
function getMonster(monster){
	for(var i = 0; i < 6; i++){
		if(monster === monsters[i])
			return mons[i];
	}
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
			return attrs[i];
		}
	}
}

var atrs = [
	"Aggressive: The monster has 2 turns per round, roll initiative twice.\n",
	"Invisible: All attacks against the monster have disadvantage, player can make a DC 15 WIS saving throw to see monster.\n",
	"Life Draining: When the monster lands a physical attack, it regains HP equal to half the damage done.\n",
	"Resistant: The monster is resistant to blunt, peircing, and slashing damage from non-magic items.\n",
	"Multiplying: When this monster reaches half hp, it splits into two each with half the remaining HP.\n",
	"Vital: This monster has double HP.\n"
]
function getLuck(atr, luck){
	if(luck === 1){
		return "";
	}
	for(var i = 0; i < 6; i++){
		if(add[i] === atr){
			return atrs[i];
		}
	}
}
