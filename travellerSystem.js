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
//     inner - 