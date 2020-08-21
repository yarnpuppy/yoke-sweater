function CalcBustStitches(){
	bustcirc = parseFloat(document.getElementById("bustcirc").value);
	bodyease = parseInt(document.getElementById("bodyease").value);
	stitchgauge = parseFloat(document.getElementById("stitchgauge").value);
	
	//console.log(bustcirc);
	//console.log(bodyease);
	//console.log(stitchgauge);
        

	buststitches =(bustcirc + bodyease)* stitchgauge;
			
	var outputBustStitches = buststitches; 

	document.getElementById("output_buststitches").value = outputBustStitches;
	document.getElementById("buststitches").value = outputBustStitches;
	document.getElementById("buststitches2").value = outputBustStitches;

}



function CalcSleeveStitches(){
	upperarmcirc= parseInt(document.getElementById("upperarmcirc").value);
	sleeveease = parseInt(document.getElementById("sleeveease").value);
	stitchgauge = parseFloat(document.getElementById("stitchgauge").value);
        

	sleevestitches = (upperarmcirc + sleeveease)* stitchgauge; 
			
	var outputSleeveStitches = sleevestitches; 

	document.getElementById("output_sleevestitches").value = outputSleeveStitches;
	document.getElementById("sleevestitches").value = outputSleeveStitches;

}

function CalcBustWidth(){

	buststitches = parseInt(document.getElementById("buststitches").value);
	console.log(buststitches);
	bustwidth = buststitches/2;
	var outputBustWidth = bustwidth;




	document.getElementById("output_bustwidth").value = outputBustWidth; 
	document.getElementById("bustwidth").value = outputBustWidth; 

}


function CrossBackStitches(){
	crossbackwidth = parseInt(document.getElementById("crossbackwidth").value);
	stitchgauge = parseInt(document.getElementById("stitchgauge").value);
	crossbackstitches = crossbackwidth * stitchgauge;
	var outputCrossBackStitches = crossbackstitches;
	console.log(crossbackstitches);




	document.getElementById("output_crossbackstitches").value = outputCrossBackStitches; 
	document.getElementById("crossbackstitches").value = outputCrossBackStitches; 
}


function UnderArmSpanStitches(){
	bustwidth = parseFloat(document.getElementById("bustwidth").value);
	//console.log(bustwidth);//
	crossbackstitches = parseInt(document.getElementById("crossbackstitches").value);
	//console.log(crossbackstitches);//

	underarmspanstitches = Math.round((bustwidth-crossbackstitches)/2);
	//console.log(underarmspanstitches);//
	
	var outputUnderArmstitches = underarmspanstitches;



	document.getElementById("outputunderarmstitches").value = outputUnderArmstitches; 
	document.getElementById("underarmspanstitches").value = outputUnderArmstitches; 
}


function CalcLowerYokeStitches(){
	buststitches = parseInt(document.getElementById("buststitches").value);
	console.log(buststitches);
	sleevestitches = parseInt(document.getElementById("sleevestitches").value);
	console.log(sleevestitches);
	underarmspanstitches = parseInt(document.getElementById("underarmspanstitches").value);
	console.log(underarmspanstitches);

	loweryokestitches = (buststitches + (2*sleevestitches)) - (4*underarmspanstitches);
	console.log(underarmspanstitches);

	
	var outputLowerYokeStitches = loweryokestitches;
	console.log(loweryokestitches);



	document.getElementById("outputloweryokestitches").value = outputLowerYokeStitches; 
	document.getElementById("loweryokestitches").value = outputLowerYokeStitches;
	document.getElementById("loweryokestitches2").value = outputLowerYokeStitches; 

}

function CalcRaglanShapingStitches(){
	underarmspanstitches = parseInt(document.getElementById("underarmspanstitches").value);
	console.log(underarmspanstitches);

	raglanshapingstitches = 2*underarmspanstitches;

	if (raglanshapingstitches % 8 == 0){
		raglanshapingstitches = raglanshapingstitches;

	} else {
		raglanshapingstitches = "Round up or down to number divisible by 8: please adjust crossbackwidth measurement.";

	}

	
	var outputraglanShapingStitches = raglanshapingstitches;




	document.getElementById("outputraglanshapingstitches").value = outputraglanShapingStitches; 
	document.getElementById("raglanshapingstitches").value = outputraglanShapingStitches; 
}


function CalcLowerFrontorBackWidthStitches(){
	buststitches = parseInt(document.getElementById("buststitches").value);
	underarmspanstitches = parseInt(document.getElementById("underarmspanstitches").value);
	
	lowerfrontorbackwidthstitches = (buststitches-(2*underarmspanstitches))/2;


	
	var outputLowerFrontOrBackWidthStitches = lowerfrontorbackwidthstitches;
	console.log(lowerfrontorbackwidthstitches);



	document.getElementById("outputlowerfrontorbackwidthstitches").value = outputLowerFrontOrBackWidthStitches; 
	document.getElementById("lowerfrontorbackwidthstitches").value = outputLowerFrontOrBackWidthStitches; 
}


function CalcLowerSleeveStitches(){
	sleevestitches = parseInt(document.getElementById("sleevestitches").value);
	underarmspanstitches = parseInt(document.getElementById("underarmspanstitches").value);
	
	lowersleevestitches = sleevestitches-underarmspanstitches;
	console.log(lowersleevestitches);


	
	var outputLowerSleeveStitches = lowersleevestitches;
	console.log(lowersleevestitches);

	

document.getElementById("outputlowersleevestitches").value = outputLowerSleeveStitches; 
document.getElementById("lowersleevestitches").value = outputLowerSleeveStitches; 


	
}


function CalcUpperFrontBackWidthStitches(){

	lowerfrontorbackwidthstitches = parseInt(document.getElementById("lowerfrontorbackwidthstitches").value);
	raglanshapingstitches = parseInt(document.getElementById("raglanshapingstitches").value);


	upperfrontorbackstitches = lowerfrontorbackwidthstitches - (raglanshapingstitches/4);
	console.log(upperfrontorbackstitches);

	var ouputUpperFrontorBackStitches = upperfrontorbackstitches;
	console.log(upperfrontorbackstitches);

document.getElementById("outputupperfrontorbackwidthstitches").value = ouputUpperFrontorBackStitches; 
document.getElementById("upperfrontorbackstitches").value = ouputUpperFrontorBackStitches; 



}



function CalcUpperSleeveStitches(){
	lowersleevestitches = parseInt(document.getElementById("lowersleevestitches").value);
	raglanshapingstitches = parseInt(document.getElementById("raglanshapingstitches").value);
	
	uppersleevestitches = lowersleevestitches-(raglanshapingstitches/4);


	
	var outputUpperSleeveStitches = uppersleevestitches;


document.getElementById("outputuppersleevestitches").value = outputUpperSleeveStitches; 
document.getElementById("uppersleevestitches").value = outputUpperSleeveStitches; 
}



function CalcUpperTotalStitchCount(){
	upperfrontorbackstitches = parseInt(document.getElementById("upperfrontorbackstitches").value);
	uppersleevestitches = parseInt(document.getElementById("uppersleevestitches").value);
	
	uppertotalstitches = (2*upperfrontorbackstitches) + (2*uppersleevestitches);


	var outputUpperTotalStitches = uppertotalstitches;
	console.log(uppertotalstitches);



document.getElementById("outputuppertotalstitches").value = outputUpperTotalStitches; 
document.getElementById("uppertotalstitches").value = outputUpperTotalStitches; 

 }
		



function CalcNecklineStitchCount(){
	necklinecircumference = parseFloat(document.getElementById("necklinecircumference").value);
	stitchgauge = parseFloat(document.getElementById("stitchgauge").value);

	necklinestitches = necklinecircumference * stitchgauge; 

	var outputNecklineStitches = necklinestitches;
	

document.getElementById("outputnecklinestitches").value = outputNecklineStitches; 
document.getElementById("necklinestitches").value = outputNecklineStitches;
document.getElementById("necklinestitches2").value = outputNecklineStitches; 
}
		

function CalcTotalYokeShapingStitches(){



	necklinestitches = parseInt(document.getElementById("necklinestitches").value);
	uppertotalstitches = parseInt(document.getElementById("uppertotalstitches").value);

	yokeshapingstitches = uppertotalstitches - necklinestitches;

// Alternate forumal yokeshapingstitches = loweryokecircumference -necklinestitches - raglanshapingstitches//

	var outputYokeShapingStitches = yokeshapingstitches;

	console.log(yokeshapingstitches);
	

document.getElementById("outputyokeshapingstitches").value = outputYokeShapingStitches; 
document.getElementById("yokeshapingstitches").value = outputYokeShapingStitches; 
}
		


function CalcTotalBodyRoundCount(){
	rowgauge = parseFloat(document.getElementById("rowgauge").value);

	
	desiredlength = parseFloat(document.getElementById("desiredlength").value);

	bodyroundcount =  2*Math.round((rowgauge * desiredlength/2));



	var outputBodyRoundCount = bodyroundcount;
	console.log(bodyroundcount);


document.getElementById("bodyroundcount").value = outputBodyRoundCount;

}

function CalcSleeveRoundCounts(){
	rowgauge = parseFloat(document.getElementById("rowgauge").value);
	sleevelength = parseFloat(document.getElementById("sleevelength").value);

	sleeverounds =   2*Math.round((rowgauge * sleevelength)/2);

	var outputSleeveRoundCounts = sleeverounds;
	console.log(sleeverounds);


document.getElementById("sleeverounds").value = outputSleeveRoundCounts; 
// 	document.getElementById("lowerfrontorbackwidthstitches").value = outputLowerFrontOrBackWidthStitches; 
}


function CalcNumberofShortRows(){
	frontneckdrop = parseFloat(document.getElementById("frontneckdrop").value);
	
	rowgauge = parseInt(document.getElementById("rowgauge").value);


	shortrows = 2*Math.round((frontneckdrop * rowgauge)/2);

	console.log(shortrows);

	var outputShortRows = shortrows;

document.getElementById("shortrows").value = outputShortRows; 

}

function CalcBackYokeStitchesNeckline(){

	necklinestitches = parseInt(document.getElementById("necklinestitches").value);

	backyokestitchesneck = necklinestitches/2;

	console.log(backyokestitchesneck);

	var outputBackYokeStitchesNeck = backyokestitchesneck;

document.getElementById("backyokestitchesneck").value = outputBackYokeStitchesNeck; 


}

function CalcBackYokeStitchesLowerYokeCirc(){

	loweryokestitches = parseFloat(document.getElementById("loweryokestitches").value);

	console.log(loweryokestitches);

	backyokestitcheslowercirc = loweryokestitches/2;

	var outputBackYokeStitchesLowerYokeCirc= backyokestitcheslowercirc;

document.getElementById("backyokestitcheslowercirc").value = outputBackYokeStitchesLowerYokeCirc; 

}
// //
// 		