
for (counter=5; counter <= 120; counter = counter+10)
{
	console.log("current value is ", counter);
}

for (counter=4096; counter >= 1 ; counter = counter/2)
{
	console.log("current value is ", counter);
}

var presidents = ["lincoln", "obama", "clinton"]

for (i=0; i < presidents.length; i++)
{
	console.log("president #" , i+1, "was ", presidents[i])
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}



var x;
for (x in antSpecies) {
    console.log(antSpecies[x]);
   
}