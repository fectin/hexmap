"use strict";

/*
LCG pseudo-random generator to take a seed and make repeatable pseudorandoms.
*/

export default class LCG {
	
	//parameter names are standard for this kind of pseudorandom generator
	//these values selected to match the UNIX scheme, which is apparently well-regarded.
	static #a = 1103515245;
	static #c = 12345;
	static #modulus = 2 ** 31;
	#seed = 0;

	rand()	{
		let digitCount = 5;
		this.#seed = (lcg.#a * this.#seed + lcg.#c) % lcg.#modulus;
		return this.#seed / lcg.#modulus;
	}
	
	dice(sides = 6)	{
		return (Math.floor(this.rand()*sides)+1);
	}
	
	#hash(seed)	{
		let outputBin = "0";
		let output = 0;
		
		// make the seed have length = 128 characters
		seed = "q" + seed.toString().slice(-64) + seed.toString() // add something to handle blank, make it care about the first and last 64 characters. 
															//So if the whole thing overflows 128 chars, and it has a cadence at the end, the cadence is part of the seed.
		seed = seed.padEnd(128,seed); 							//repeat seed until 128 chars
		
		//use the first two characters to generate a 16-bit number
        output = parseInt((seed.charCodeAt(0).toString(2).padStart(8,"0") + seed.charCodeAt(1).toString(2).padStart(8,"0")), 2);
        
		for (let i = 2; i < seed.length; i+=2) {
			outputBin = output.toString(2).padStart(16,"0");
			outputBin = (outputBin[(i/2)%16] === "1") ? outputBin.slice(3) + outputBin.slice(0, 3) : outputBin; // rotate the output by 3, sometimes (avoid single chars xoring themselves forever)
			output = parseInt(outputBin, 2);
			output = output ^ parseInt((seed.charCodeAt(i).toString(2).padStart(8,"0") + seed.charCodeAt(i+1).toString(2).padStart(8,"0")), 2);
        }
			// bits rotate by 3
			outputBin = output.toString(2).padStart(16,"0");
			outputBin = outputBin.slice(3) + outputBin.slice(0, 3)
			output = parseInt(outputBin, 2);
        return output;
	}
	
	constructor(inSeed = Math.random()){
		this.#seed = this.#hash(inSeed);
		
	}
	
 }
