

"use strict";

//********uncomment for live
//import LCG from './LCG.js';
//import planetNameGen from './planetNames.js';

//** "export default class" for live

class subsector	{
	static #rows = 10;
	static #cols = 8;
	#name = "";
	#map = [];
	#dice = null;
	#PNG = null;
	#live = true;

	getMap()	{
		return this.#map;
	}
	
	getName()	{
		return this.#name;
	}
	
	#rollDice(numDice, DM1=0, DM2=0, DM3=0, DM4=0, DM5=0)	{
		let DM = DM1+DM2+DM3+DM4+DM5;
		//console.log(`numdice = ${numDice}   DM = ${DM}`);
		return (numDice < 1) ? DM : (this.#rollDice(numDice-1, this.#dice.dice()) + DM);
	}
	
	#rollCheck(numDice, TN, DM1=0, DM2=0, DM3=0, DM4=0, DM5=0){
		if (TN > 0)	{
			return (this.#rollDice(numDice, (DM1+DM2+DM3+DM4+DM5)) >= TN) ? 1 : 0;
		} else	{
			return (this.#rollDice(numDice, (DM1+DM2+DM3+DM4+DM5)) <= (TN*-1)) ? 1 : 0;
		}
	}
	
	#makeSystem(){
		//system is [world(0/1), Starport(A/B/C/D/E/X), naval base(0/1), scout base(0/1), gas giant(0/1)]
		let system = []
		let starportCheck = 0;
		let scoutDM = 0;
		system[0] = this.#rollCheck(1,4);	//World.
		if (system[0] === 1){
			
			starportCheck = this.#rollDice(2); 				//Roll now, preserve for later. Makes the bases easier.
			system[1] = "A -3";										//starport. the numbers are for scout base DMs.
			system[1] = (starportCheck >  4) ? "B -2" : system[1];	//starport. the numbers are for scout base DMs.
			system[1] = (starportCheck >  6) ? "C -1" : system[1];	//starport. the numbers are for scout base DMs.
			system[1] = (starportCheck >  8) ? "D 0" : system[1];	//starport. the numbers are for scout base DMs.
			system[1] = (starportCheck >  9) ? "E" : system[1];		//starport. the numbers are for scout base DMs.
			system[1] = (starportCheck > 11) ? "X" : system[1];		//starport. the numbers are for scout base DMs.
			scoutDM = parseInt(system[1]);							//Pull the scout DM out
			system[1] = system[1].slice(0,1);						//plain starport type
			scoutDM  = isNaN(scoutDM) ? 0 : scoutDM;
			
			
			system[2] = this.#rollCheck(2,8) * (0+(starportCheck < 7)); //Naval base. Only there if starport A or B.
			system[3] = this.#rollCheck(2,8, scoutDM) * (0+(starportCheck < 10)); //Scout base. Only there if starport A-D.
			system[4] = this.#rollCheck(2,-10);
			system[5] = this.#PNG.getName();
			
		}
		return system;
	}
	
	buildSubSector(subSectorName = "The Wilds")	{
		this.#name = subSectorName;
		if(this.#live){
			this.#dice = new LCG(subSectorName);
			this.#PNG = new planetNameGen(subSectorName, "random");
		}


		for (let curCol = 0; curCol < subsector.#cols; curCol+=1) {
			this.#map[curCol] = [];
			for(let curRow = 0; curRow < subsector.#rows; curRow+=1) {
				this.#map[curCol][curRow] = [];
				this.#map[curCol][curRow][0] = `${(curCol < 9 ? '0' : '') + (curCol+1)}` + `${(curRow < 9 ? '0' : '')+(curRow+1)}`;
				this.#map[curCol][curRow][1] = this.#makeSystem();
			}
		}

	}
	
	constructor(subSectorName = "Wyldd Zone"){
//***** DEV ONLY. comment this section out to replace with LCG and PNG ***************	//
//		These functions mimic the behavior of the classes that should be used in live	//
		this.#live = false;
		this.#name = subSectorName;
		this.#dice = {																	//		
			rand()	{																	//
				return Math.random();													//
			},																			//
			dice(sides = 6)	{															//
				return (Math.floor(Math.random()*sides)+1);								//
			},																			//
			getSeed()	{																//
				return Math.random()*(2**31);											//
			}																			//
		};																				//
		this.#PNG = {																	//
			getName()	{																//
				let names = ['foo','bar','baz','bat','fubar','Fooooo','Bazbat',			//
							'Fizz','Popper','Fishbreath','Mastodon','George',			//
							'Underdark','Shadowbad','Amityville','Bartertown',			//
							'Looney Patooney','Duff','Saxaphahaw','The Enclav', 		//
							'Batcave','Xanadu','Leng','Timbuktu','Machu']				//
				return(names[Math.floor(Math.random()*names.length)]);	//
			}																			//
		}				
		this.buildSubSector(subSectorName );																		//
/************************************************************************************/	//
		


	}
}
