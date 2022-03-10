// Data structure: [orbitNumber, orbit type([I]nner/[U]navailable/[H]abitable/[O]uter/[X]other)), orbitcount, [orbiting items, using this format], UPP/type, spaceport, tech, other features]
//
// For extending a subsector:
// Take the main world as input, plus gas giant
// 
// UPP is Spaceport - (size, atmo, hydro, pop, gov, law) - Tech
//
// First generate the "nature of the system." 2d6:
// 0-7 Solo
// 8-11 Binary
// 12+ trinary
//
// Generate star type (temperature, in descending order). 2d6:
// DM +4 if (atmosphere (UPP[1]) 4-9 or population (UPP[3]) 8+)
// save roll, translate later
// character index of "BBAMMMMMKGFFF" starts with 0, goes to 12.
//
// generate extra detail on spectrum. 1d10. Append to type.
// if type O, spectrum is 5-9
//
// Generate size
// DM +4 if (atmosphere (UPP[1]) 4-9 or population (UPP[3]) 8+)
// save roll, translate later
// 0: Ia, 1: Ib, 2: II, 3: III, 4: IV, 5-10: V, 9: VI, 10-12: D
// if K5-M9 and size IV, size is V
// if B0-F4 and size VI, size is V
//
// Generate companions:
// Type is 2d6+ primary result:
// "-BAFFGGKKMMMM"
// 
// size is:
// DM +4 if trinary
// 0: Ia, 1: Ib, 2: II, 3: III, 4: IV, 5-6: D, 7-8: V, 11: VI, 12: D
// if K5-M9 and size IV, size is V
// if B0-F4 and size VI, size is V
//
// Orbit is:
// DM +0 for first companion; +4 for second
// 0-3: Close, 4-6: (result-3), 7-11: result-3+1d6, 12:far
// orbit occupies a planetary obit.
// if orbit is within sphere of primary, orbit is close.
// far is 1d6*1000 AU
//     If far,reroll basic nature for that star. if binary, generate companion(s) for it, with -4 on companion orbit.
//
// Generate Max orbits for each star:
// DMs based on size: III: +4, (Ia, Ib, II): +8, M: -4, K: -2)
// orbits are restrcted with companion: must be in range 0 <= orbit <= companionOrbit / 2, or companionOrbit + 2
// Companion's orbits are capped at companionOrbit / 2
// 
// Orbit zones are by star type/size:
//     inside - inside the star
//     unavilable - too hot, planet would vaporize
//     inner - TOO MUCH SUN. hot and inhospitible
//	   habitable - yay.
//     outer - too far, too cold
//
// Check for empty orbits, then check for how many.
// Place empty orbits by rolling 2D6, reroll on collisions or if > highest available.
// 
// Check for captured planets 1d6 on table.
// if yes, roll 2d6 to select orbit baseline (reroll if too high) and 
//     roll 2d6-7 to select deviation in tenths (adds another orbit at a fractional distance). So orbit 2 adjusted by -3 would be new orbit 1.7
// 
// If gas giant is present, roll for number and place them. If no free orbits, place at least one by adding one to outermost orbit.
//
// planetoids are size zero. roll 2d6-[gas giants] on table.
//     "Asteroid belt" is a primary world of size 0
//     "planetoid belt" is all others
//
// Place components:
//     Gas giants first - randomly between habitabe and outer; if inner if both are full
//     Planetoid belts second: randomly among next orbits in from gas giants, then randomly among all orbits.
//     Finally, main world:
//         If atmosphere 1- or A+, or size 0, anywhere.
//		   If gas giant in habitable zone, as satellite
//		   Else in habitable zone.
//
// Generate worlds to fill
//
// Generate satellites for worlds
//
// Generate addtional characteristics for all worlds/satellites
//
//[orbitNumber, orbit type([I]nner/[U]navailable/[H]abitable/[O]uter/[X]other)), orbitcount, [orbiting items, using this format], UPP/type, spaceport, tech, other features]


//********uncomment for live
//import LCG from './LCG.js';
//import planetNameGen from './planetNames.js';

//** "export default class" for live

class orbiter(){
	
	"??
	
}

class system(){
	sysTree =[];
	nature="";
	
	makeNature
	
	
	makeSun(type = "primary")	{
		
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

	
	
	
	
	
	constructor(primary = ["Wooten","A","777777","8"]){
		


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
		
		this.#name = subSectorName;
		if(this.#live){
			this.#dice = new LCG(subSectorName);
			this.#PNG = new planetNameGen(subSectorName, "random");
		}

	}

}



