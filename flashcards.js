
function BasicCard(frontArg, backArg){

  if(!(this instanceof BasicCard)){
    return new BasicCard(frontArg, backArg)
  }
	this.frontArg = frontArg;
	this.backArg = backArg;
};




function ClozeCard(textArg, clozeArg){

  if(!(this instanceof ClozeCard)){
    return new ClozeCard(textArg, clozeArg)
  }

  this.textArg = textArg;
  this.backArg = backArg;

};