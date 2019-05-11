const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const wheel = require('./sufferingWheel.js');
const factory = require('./monsterFactory.js');
const generate = require('./monsterGen.js');

var userCurrHealth = {}
var userMaxHealth = {}
var luck = {};

var cmd = [
	(new RegExp("!T/F", 'i')),
	(new RegExp("!Spin", 'i')),
	(new RegExp("!Monster", 'i')),
	(new RegExp("!Factory", 'i')),
	(new RegExp("!Help", 'i'))
]

var monsters = []

client.on('ready', () => {
		console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg =>{
	//Bot can't respond to itself
	if(msg.author.bot){return}

	if(cmd[0].test(msg.content)){
		var decision = msg.content.split(' ');
		var outcome = wheel.trustForsake();
		if(decision[1].toLowerCase() === "trust"){
			if(outcome === 0){
				luck[msg.guild.id] = 1;
				msg.channel.send("You both trust, enjoy the normal challenge!");
			}
			if(outcome === 1){
				luck[msg.guild.id] = 2
				msg.channel.send("You were forsaken, too bad!");
			}
		}
		else{
			if(outcome === 0){
				luck[msg.guild.id] = 0;
				msg.channel.send("They trusted you, enjoy the bonus challenge!");
			}
			if(outcome === 1){
				luck[msg.guild.id] = 1
				msg.channel.send("You both forsook, enjoy the normal challenge!");
			}
		}
	}

	if(cmd[1].test(msg.content)){
		var outcome = wheel.spin();
		msg.channel.send(msg.author.toString() + ' you got ' + outcome + '!');
		msg.channel.send(msg.author.toString()  + wheel.getExplain(outcome));
	}

	if(cmd[2].test(msg.content)){
		msg.channel.send("Welcome to the Monster Factory!")
		msg.channel.send(generate.createMonster());
		msg.channel.send(generate.generateMonster(5));
	}

	if(cmd[3].test(msg.content)){
		msg.channel.send("Welcome to the Monster Factory!")
		if(luck[msg.guild.id] === 2){
			msg.channel.send(factory.createMonster(true));
		}
		else {
			msg.channel.send(factory.createMonster(false));
		}
		msg.channel.send(factory.getMonsterSheet());
	}

	if(cmd[4].test(msg.content)){
		msg.channel.send('You may use:\n'
		+ '!T/F: Play Trust or Forsake and don\'t make the wrong choice.\n'
		+ '!Spin: Spin the Wheel of Suffering and accept or decline your fate.\n'
		+ '!Factory: Run the Monster Factory using Trust or Forsake outcome.\n'
		+ '!Monster: Run the Monster Generator and create a random abomination to fight.\n'
		+ '!Help: Summon this helpful little prompt!'
	);
	}


})


client.login(auth.token)
