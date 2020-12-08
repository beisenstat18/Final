var fortuneOutput=document.getElementById("fortune-output");

function mOver(obj) {
  obj.innerHTML= "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspWE CONNECT YOU TO THE LOVE YOU EARNED";
}

function mOut(obj) {
  obj.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspWELCOME TO THE DATING WORLD THAT VALUES YOUR NETWORK."
}


Submit.addEventListener ("click", getAccess);

function getAccess(){
  var season= ["No matter what you do you will never be enough.", "Relationships are built on trust, and we don't trust you without a stronger social media presence.","Try harder. Maybe next time.","You spend too much time thinking about yourself instead of building on your relationship with others.", "We don't take people as unmotivated as you."];
  var selectedSeason= Math.floor(Math.random ()* season.length);
  fortuneOutput.innerHTML = season[selectedSeason];
}

function restyle(){
  fortuneOutput.style.textAlign=("center");
  fortuneOutput.style.textSize=("60");
  fortuneOutput.style.backgroundColor = ("#000000");
fortuneOutput.style.color = ("#FC30ED");

}

restyle();
