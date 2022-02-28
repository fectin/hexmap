"use strict";

import lcg from './LCG.js';

export default class subsector	{

	name = "";
	#map = [];
	#dice = null;

	getMap()	{
		return this.#map;
	}
	constructor(subSectorName = "The Wilds"){
		this.name = subSectorName;
		this.#dice = new lcg(subSectorName);
	}
}

var mysuss = new subsector();