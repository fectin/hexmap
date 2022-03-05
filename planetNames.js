"use strict"

//** uncomment for live
//import LCG from './LCG.js';


//** "export default class" for live
class planetNameGen {
	#style = "";
	rootName = "";
	#nm1=["b","c","ch","d","g","h","k","l","m","n","p","r","s","t","th","v","x","y","z","","","","",""];
	#nm2=["a","e","i","o","u"];
	#nm3=["b","bb","br","c","cc","ch","cr","d","dr","g","gn","gr","l","ll","lr","lm","ln","lv","m","n","nd","ng","nk","nn","nr","nv","nz","ph","s","str","th","tr","v","z"];
	#nm3b=["b","br","c","ch","cr","d","dr","g","gn","gr","l","ll","m","n","ph","s","str","th","tr","v","z"];
	#nm4=["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","ae","ai","ao","au","a","ea","ei","eo","eu","e","ua","ue","ui","u","ia","ie","iu","io","oa","ou","oi","o"];
	#nm5=["turn","ter","nus","rus","tania","hiri","hines","gawa","nides","carro","rilia","stea","lia","lea","ria","nov","phus","mia","nerth","wei","ruta","tov","zuno","vis","lara","nia","liv","tera","gantu","yama","tune","ter","nus","cury","bos","pra","thea","nope","tis","clite"];
	#nm6=["una","ion","iea","iri","illes","ides","agua","olla","inda","eshan","oria","ilia","erth","arth","orth","oth","illon","ichi","ov","arvis","ara","ars","yke","yria","onoe","ippe","osie","one","ore","ade","adus","urn","ypso","ora","iuq","orix","apus","ion","eon","eron","ao","omia"];
	#nm7=[""];
	#randID=false;
	#br="";
	#cadence=["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", "XXX"]; 
	#cadenceNum = 0;
	#RNG = null;
	


	#randName(){			
		let rnd=0;
		let rnd2=0;
		let rnd3=0;
		let rnd4=0;
		let rnd5=0;
		let rnd6=0;
		let rnd7=0;
		let i = this.#RNG.rand()*14;
		if(i<2){
			rnd=this.#RNG.rand()*this.#nm1.length|0;
			rnd2=this.#RNG.rand()*this.#nm2.length|0;
			rnd3=this.#RNG.rand()*this.#nm3.length|0;
			while(this.#nm1[rnd]===this.#nm3[rnd3]){
				rnd3=this.#RNG.rand()*this.#nm3.length|0;
			}
			rnd4=this.#RNG.rand()*this.#nm4.length|0;
			rnd5=this.#RNG.rand()*this.#nm5.length|0;
			return(this.#nm1[rnd]+this.#nm2[rnd2]+this.#nm3[rnd3]+this.#nm4[rnd4]+this.#nm5[rnd5]);
		
		} else if(i<4){
			rnd=this.#RNG.rand()*this.#nm1.length|0;
			rnd2=this.#RNG.rand()*this.#nm2.length|0;
			rnd3=this.#RNG.rand()*this.#nm3.length|0;
			while(this.#nm1[rnd]===this.#nm3[rnd3]){
				rnd3=this.#RNG.rand()*this.#nm3.length|0;
			}
			rnd4=this.#RNG.rand()*this.#nm6.length|0;
			return(this.#nm1[rnd]+this.#nm2[rnd2]+this.#nm3[rnd3]+this.#nm6[rnd4]);
		
		} else if(i<8){
			rnd=this.#RNG.rand()*this.#nm1.length|0;
			rnd4=this.#RNG.rand()*this.#nm4.length|0;
			rnd5=this.#RNG.rand()*this.#nm5.length|0;
			return(this.#nm1[rnd]+this.#nm4[rnd4]+this.#nm5[rnd5]);
			
		} else if(i<10){
			rnd=this.#RNG.rand()*this.#nm1.length|0;
			rnd2=this.#RNG.rand()*this.#nm2.length|0;
			rnd3=this.#RNG.rand()*this.#nm3b.length|0;
			while(this.#nm1[rnd]===this.#nm3b[rnd3]){
				rnd3=this.#RNG.rand()*this.#nm3b.length|0;
			}
			rnd4=this.#RNG.rand()*this.#nm2.length|0;
			rnd5=this.#RNG.rand()*this.#nm5.length|0;
			return(this.#nm3b[rnd3]+this.#nm2[rnd2]+this.#nm1[rnd]+this.#nm2[rnd4]+this.#nm5[rnd5]);
		}
		
		else{
			rnd=this.#RNG.rand()*this.#nm3b.length|0;
			rnd2=this.#RNG.rand()*this.#nm6.length|0;
			rnd3=this.#RNG.rand()*this.#nm7.length|0;
			rnd4=this.#RNG.rand()*this.#nm7.length|0;
			rnd5=this.#RNG.rand()*this.#nm7.length|0;
			rnd6=this.#RNG.rand()*this.#nm7.length|0;
			return(this.#nm3b[rnd]+this.#nm6[rnd2]+" "+this.#nm7[rnd3]+this.#nm7[rnd4]+this.#nm7[rnd5]+this.#nm7[rnd6]);
		}
	}
	
	
	
		let name = "";
		if(this.#style==="cadence")	{
			this.#cadenceNum+=1;
			name = (this.rootName + " " + this.#cadence[this.#cadenceNum]);
		}else{
			name = (this.#randName());
		}
		return(name.charAt(0).toUpperCase() + name.slice(1));
	}
	
	#pickStyle(inStyle = "")	{
		let picker = this.#RNG.rand()*10;
		if(inStyle==="random"){return (inStyle)}
		if(inStyle==="cadence"){return (inStyle)}
		if(picker > 8){return("random")}
		if(picker > 10){return("cadence")}
	}
	
	constructor(rootName = "Persei Omicron Nine", style = "", randID = false) {
		this.rootName = rootName;
		
		
		//initialize random LCG with name		


//***** DEV ONLY. comment this out to replace with LCG********
		this.#RNG = {																	
			rand()	{
				return Math.random();
			},
			dice(sides = 6)	{
				return (Math.floor(Math.random()*sides)+1);
			},
			getSeed()	{
				return Math.random()*(2**31);
			}
		};
		/**/
//***** uncomment for live
		//this.#RNG = new LCG(subSectorName);
		
		
		//select name style
		this.#style = this.#pickStyle(style);
		
		//set randID false iff cadence
		this.#randID = (this.#style==="cadence") ? false : randID;
		
		if (randID) {
			nm7=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9","","","","","","","","","","","","","",""];
		}
	}
}