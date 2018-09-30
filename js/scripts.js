// // Business Logic
function player(score, roll, player){
this.score=score
this.roll=roll
this.player=player
}
player.prototype.startGame= function () {
  return this.roll;
 }
player.prototype.hold= function() {
  return new Player(player)
}


// // user/application Logic
 $(document).ready(function(){
  $ ("#start-button").click(function(event){
    event.preventDefault()
    var Player1 = $("input#players-name1").val();
    var player= new player
    return this.player
    });
  $ ("#roll").click(function(event){
    event.preventDefault()
    var interimOne =document.getElementById("interim1");
    var interimTwo =document.getElementById("interim2");
    var roll= Math.floor (Math.random() *6) +1 ;
    return this.roll
    });
  $ ("#hold").click(function(event){
      event.preventDefault()
      var Player2 = $("input#players-name2").val();
      var player= new player
      return this.player
    });
  $ ("#score").click(function(event){
    var score= function() {
    var newScore= this.roll += new roll ()
    if (new roll()!=1){
    return newScore
    }
    else {
    return newScore*0
    }
    }
    });
    });



// //
// //   $("button#roll").click(function(event){
// //       event.preventDefault();
// //       roll = roll();
// //       $("result").text(roll);
// //
// //       if (roll === 1){
// //       interimScore.innerHTML=("1 Rolled..... turn over");
// //       }
// //       else {
// //       interimScore.innerHTML=score
//       // };
// });
