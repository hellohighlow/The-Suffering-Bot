const Discord = require('discord.js');
const client = new Discord.Client();
//const auth = require('./auth.json');
const wheel = require('./sufferingWheel.js');
const factory = require('./monsterFactory.js');


var cmd = [
	(new RegExp("!Spin", 'i')),
	(new RegExp("!Factory", 'i')),
	(new RegExp("!Recovery", 'i')),
	(new RegExp("!Healing", 'i')),
	(new RegExp("!Boss", 'i')),
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
		var outcome = wheel.spin();
		msg.channel.send(msg.author.toString() + ' you got ' + outcome + '!');
		msg.channel.send(msg.author.toString()  + wheel.getExplain(outcome));
	}

	if(cmd[1].test(msg.content)){
		msg.channel.send(factory.createMonster());
		msg.channel.send(factory.getMonsterSheet());
	}

	if(cmd[2].test(msg.content)){
		msg.channel.send('Welcome to the Recovery Zone!');
		msg.channel.send('Here you may recover one thing you lost in Wonderland,');
		msg.channel.send('however one of you must sacrifice something of equal value.');
		msg.channel.send('So, what\'ll it be?');
	}

	if(cmd[3].test(msg.content)){
		msg.channel.send('Welcome to the Healing Zone!');
		msg.channel.send('Here you may recover some of the health you have lost,');
		msg.channel.send('however one of you must lose heath to heal the others at a 2:1 ratio.');
		msg.channel.send('So, who needs some health?');
	}

	if(cmd[4].test(msg.content)){
		msg.channel.send('IT\'S TIME FOR A BOSS RUSH!');
		msg.channel.send('To DM: Fill in this time with any former bosses')
	}

	if(cmd[5].test(msg.content)){
		msg.channel.send('You may use:\n'
		+ '!Spin: Spin the Wheel of Suffering and accept or decline your fate.\n'
		+ '!Factory: Run the Monster Factory and create an abomination to fight.\n'
		+ '!Recovery: Enter the Recovery Zone.\n'
		+ '!Healing: Enter the Healing Zone.\n'
		+ '!Boss: Begin the final Boss Rush of Wonderland.\n'
		+ '!Help: Summon this helpful little prompt!'
	);
	}


})


client.login(process.env.BOT_TOKEN)
