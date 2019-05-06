var outcomes = [
	'Hand',
	'Eye',
	'Brain',
	'Swords',
	'Backpack',
	'Body',
	'Skull',
	'Clock',
	'Question Mark'
]

var explains = [
	' must sacrifice a hand skill.',
	' must sacrifice an eye skill.',
	' must sacrifice a memory or mind skill.',
	' must sacrifice a future fight.',
	' must sacrifice an important item.',
	' must sacrifice some of their max HP.',
	' will be hit with bad luck later in Wonderland.',
	' must sacrifice some of their age.',
	' may sacrifice anything of value.'
]


module.exports = {
	spin:function(){
		var index = Math.floor(Math.random()*100000000) % 9;
		return outcomes[index];
	},

	getExplain:function(outcome){
		for(var i = 0; i < 9; i++){
			if(outcomes[i] === outcome){
				return explains[i];
			}
		}
	}
}
