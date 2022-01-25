var weight = [35,38,42,45,43,34,36,41,48,32];

var sum = 0;
console.log(weight);

function setup() {
  createCanvas(400,400);
  for(var n=0; n< weight.length; n++){
    sum = sum + weight[n];
  }
  var pro = sum/weight.length;
  console.log(pro);
}



function draw() 
{
  background(30);
}

 

