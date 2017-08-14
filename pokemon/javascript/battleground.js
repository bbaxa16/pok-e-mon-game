$(()=>{ //window onload
//****************
//global variables
//****************
let ourPoke = " ";
let wildPoke = " ";
let $attackButton = $('<button>A T T A C K</button>').attr('id','attack').addClass('animation')
//****************
//Pokemon class where
//all our pokemon functions are housed
//****************
  class Pokemon { //creating a pokemon class
    constructor (name, level, poketype, img){
      this.name = name;
      this.level = level;
      this.xp = 5;
      this.poketype = poketype;
      this.img = img;
      this.accuracy = '';
      this.hp = 100;
      this.coin = 300;
    }
    getAccuracy(){ //this will give all pokes a randomly generated accuracy between .4 and .7.
      this.accuracy = Math.random() * (.7 - .4) + .4;
      console.log(this.accuracy);
    }
    attack(wildPoke){ //have different attacks based on poketype
      if(this.poketype === "water"){
        if(Math.random() < this.accuracy){
          wildPoke.hp -= 22;
          createModal(this.name + ' used water gun. It was very effective, ' + wildPoke.name + ' loses 22 hp');
          if(wildPoke.hp <= 0){
            createModal(this.name + ' used water gun. It was very effective. ' + wildPoke.name + ' fainted.' );
            game.checkBattleWinner();
            this.coin +=325;
          }
          else if(this.hp <= 0){
            game.checkBattleWinner();
          }
        }
          else {
            createModal(this.name + ' missed!');
          }
      }
      else if (this.poketype === "grass"){
        if(Math.random() < this.accuracy){
          wildPoke.hp -= 22;
          createModal(this.name + ' used razor leaf. It was very effective, ' + wildPoke.name + ' loses 22 hp');
          if(wildPoke.hp <= 0){
            createModal(this.name + ' used razor leaf. It was very effective. ' + wildPoke.name + ' fainted.');
            game.checkBattleWinner();
            this.coin +=325;
          }
          else if(this.hp <= 0){
            game.checkBattleWinner();
          }
        }
          else {
            createModal(this.name + ' missed.');
          }
      }
      else if (this.poketype === "fire"){
        if(Math.random() < this.accuracy){
          wildPoke.hp -= 22;
          createModal(this.name + ' used fireball. It was very effective, ' + wildPoke.name + ' loses 22 hp');
          if(wildPoke.hp <= 0){
            createModal(this.name + ' used fireball. It was very effective. ' + wildPoke.name + ' fainted.');
            this.coin +=325;
            game.checkBattleWinner();
          }
          else if(this.hp <= 0){//check to see if we dead
            game.checkBattleWinner();
          }
        }
          else {
            createModal(this.name + ' missed.');
          }

      }
      else if (this.poketype === "electric"){
        if(Math.random() < this.accuracy){
          wildPoke.hp -= 22;
          createModal(this.name + ' used lightning strike. It was v effective, ' + wildPoke.name + ' loses 22 hp');
          if(wildPoke.hp <= 0){
            createModal(this.name + ' used lightning strike. It was very effective. ' + wildPoke.name + ' fainted.');
            game.checkBattleWinner();
            this.coin +=325;
          }
          else if(this.hp <= 0){//check to see if we dead.
            game.checkBattleWinner();
          }
        }
          else {
            createModal(this.name + ' missed.');
          }
      }
    }
  }
// **********************
// creating all the different pokemon.
// **********************

  const pikachu = new Pokemon("pikachu", 1, "electric", $('<img src="../img/pikachu.png">').addClass('pokeImages'))
  const charmander = new Pokemon("charmander", 1, "fire", $('<img src="../img/charmander.png">').addClass('pokeImages'))
  const squirtle = new Pokemon("squirtle", 1, "water", $('<img src="../img/squirtle.png">').addClass('pokeImages'))
  const froakie = new Pokemon("froakie", 1, "water", $('<img src="../img/froakie.png">').addClass('pokeImages'))
  const bellsprout = new Pokemon("bellsprout", 1, "grass", $('<img src="../img/bellsprout.png">').addClass('pokeImages'))
  const chimchar = new Pokemon("chimchar", 1, "fire", $('<img src="../img/chimchar.png">').addClass('pokeImages'))
  const totodile = new Pokemon("totodile", 1, "water", $('<img src="../img/totodile.png">').addClass('pokeImages'))

  //create an array of the pokemon we will battle
  const wildArr = [pikachu,froakie,chimchar,totodile];
  //create an array of the pokemon we will battle with
  const ourArr = [squirtle,charmander,bellsprout]
  //create a function that will randomly select our opponent.
  const chooseWildPoke = () => {
      let wildPoke = wildArr[Math.floor(Math.random()* wildArr.length)];
      return wildPoke;
  }
  //create a function that will randomly select our pokemon
  const chooseOurPoke = () => {
    let ourPoke = ourArr[Math.floor(Math.random()* ourArr.length)];
    return ourPoke;
  }

  //game object
const game = {
  rounds: 1,
  checkBattleWinner(){
    if(ourPoke.hp <= 0){
      this.overMessage();
    }
    else {
      if (game.rounds > 3){
      game.gameWinner()
      }
      else {
      createModal('YOU WON THE BATTLE! Ready for the next round?', 'yes', 'no')
      //$($attackButton).off()
      game.rounds ++
      $('#message-modal').children().eq(1).css('display','inline-block')
      $('#message-modal').children().eq(2).css('display','inline-block')
      $('#message-modal').children().eq(1).on('click', () => {
          createModal('Round ' + this.rounds + ' begin!', 'start')
          $('#message-modal').off()
          $('#message-modal').css('margin-left','12%')
          $('#message-modal').children().eq(1).css('display', 'inline-block')
          $('#message-modal').children().eq(1).on('click', ()=>{
            game.start()
          })
       })
       $('#message-modal').off()
       $('#message-modal').children().eq(2).on('click', ()=>{
         createModal('Would you like to restart?', 'yes', 'no')
         $('#message-modal').off()
         $('#message-modal').css('margin-left','12%')
         $('#message-modal').children().eq(1).css('display','inline-block')
         $('#message-modal').children().eq(1).on('click', () => {
           $('#message-modal').children().eq(1).html('<a href="battleground.html">yes</a>')
         })
           $('#message-modal').children().eq(2).css('display','inline-block')
           $('#message-modal').children().eq(2).on('click', () => {
             $('#message-modal').children().eq(2).html('<a href="../index.html">no</a>')
         })
       })
      }
    }
  },
  overMessage(){ //if you run out of lives
    createModal('Your pokémon fainted, Game over! would you like to restart?', 'yes', 'no')
    $('#message-modal').off()
    $('#message-modal').children().eq(1).css('display','inline-block')
    $('#message-modal').children().eq(1).on('click', () => {
      $('#message-modal').children().eq(1).html('<a href="battleground.html">yes</a>')
    })
      $('#message-modal').children().eq(2).css('display','inline-block')
      $('#message-modal').children().eq(2).on('click', () => {
        $('#message-modal').children().eq(2).html('<a href="../index.html">no</a>')
    })
},
  gameWinner(){
    createModal('YOU HAVE BEATEN THE GAME, YOU ARE THE ONE TRUE POKÉMON MASTER!')
    $('.container').html('<iframe src="https://giphy.com/embed/vsyKKf1t22nmw" width="480" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></p>')
  },
  start(){ //conditionals for rounds
      if(this.rounds === 1){
      //chooses the wild pokemon we will battle
      wildPoke = chooseWildPoke();
      //alerts us which pokemon has been chosen
      createModal('Wild ' + wildPoke.name + ' appeared!');
      //attachs the wild pokemon img to its respective div
      $('#wildPoke').append(wildPoke.img).addClass('wildPoke');
      //remove the battle button
      $('#battle').remove();
      //attach the button to our attack button
      $('#ourPokeSpecs').append($attackButton);
      this.showOurPokeSpecs()
      this.showWildPokeSpecs()
      this.roundCounter()
      //create an eventlistener on our attack button that will attack our opponent and generate their retaliation.
      $($attackButton).on('click', function(){
         ourPoke.getAccuracy()
         ourPoke.attack(wildPoke)
         game.showWildPokeSpecs()
         wildPoke.getAccuracy()
         $('#message-modal').addClass('animation')
         //add a eventlistener to our message modal so we see all the messages...
         $('#message-modal').on('click', ()=>{
         wildPoke.attack(ourPoke)
         game.showOurPokeSpecs()
         $('#message-modal').off()
       })
    })
  }
    else {
    ourPoke.hp += 100
    ourPoke.getAccuracy()
    wildPoke = chooseWildPoke()
    wildPoke.hp = 100
    wildPoke.getAccuracy()
    createModal('Wild ' + wildPoke.name + ' appeared!')
    $('#wildPoke').children().eq(0).remove()
    $('#wildPoke').append(wildPoke.img)
    //removes the first attack button
    $('#ourPokeSpecs').children().eq(2).remove()
    //adds the new attack button
    $('#ourPokeSpecs').append($attackButton);
    game.showOurPokeSpecs()
    game.showWildPokeSpecs()
    game.roundCounter()
    $($attackButton).on('click', function(){
       //ourPoke.getAccuracy();
       ourPoke.getAccuracy()
       ourPoke.attack(wildPoke)
       game.showWildPokeSpecs()
       wildPoke.getAccuracy()
       //add a eventlistener to our message modal so we see all the messages
       $('#message-modal').on('click', ()=>{
       wildPoke.attack(ourPoke)
       game.showOurPokeSpecs()
       $('#message-modal').off()
      })
    })
    }
  },
  showOurPokeSpecs(){
    $('#ourPokeSpecs').css('display','inline-block')
    $('#ourPokeSpecs').children().eq(0).html(ourPoke.name)
    $('#ourPokeSpecs').children().eq(1).children().eq(0).html('hp: ' + ourPoke.hp)
    $('#ourPokeSpecs').children().eq(1).children().eq(1).html('level: ' + ourPoke.level)
    $('#ourPokeSpecs').children().eq(1).children().eq(2).html('pokétype: ' + ourPoke.poketype)
    $('#message-modal').css('margin-left','12%')


  },
  showWildPokeSpecs(){
    $('#wildPokeSpecs').css('display','inline-block');
    $('#wildPokeSpecs').children().eq(0).html(wildPoke.name)
    $('#wildPokeSpecs').children().eq(1).children().eq(0).html('hp: ' + wildPoke.hp)
    $('#wildPokeSpecs').children().eq(1).children().eq(1).html('level: ' + wildPoke.level)
    $('#wildPokeSpecs').children().eq(1).children().eq(2).html('pokétype: ' + wildPoke.poketype)
    $('#message-modal').css('margin-left','12%')

  },
  roundCounter(){
    $('#subheader').css('display','inline-block');
    $('#subheader').children().eq(0).html('Round: ' + game.rounds)
  }
}

//********************
//Modal function where all messages will go
//********************

const createModal = (message, button1, button2) => {

  $('#message-modal').html('<div>' + message + '</div>')
  //message modal styling
  $('#message-modal').css('font-family','fantasy')
  $('#message-modal').css('color', 'white')
  $('#message-modal').css('background-color','black')
  $('#message-modal').css('border','2px dotted white')
  $('#message-modal').css('border-radius', '3%')
  $('#message-modal').css('font-size','18px')
  $('#message-modal').css('margin-left','34%')
  $('#message-modal').css('display','inline-block')
  $('#message-modal').css('position','absolute')
  $('#message-modal').css('zIndex', '1')
  $('#message-modal').css('width', '30%')
  $('#message-modal').css('textAlign', 'center')
  $('#message-modal').css('display','inline-block')
  //appending buttons to the message modal
  $('#message-modal').append('<button>' + button1 + '</button>')
  $('#message-modal').children().eq(1).css('display', 'none')
  $('#message-modal').append('<button>' + button2 + '</button>')
  $('#message-modal').children().eq(2).css('display', 'none')
}
//***************************************


//The very first button that's pressed on this page
$('#ready').on('click', function(){
  //selects our pokemon we will battle with
  ourPoke = chooseOurPoke()
  //removes the 'ready to battle' button
  $('#ready').remove()
  //puts our Poke on the battlefield
  $('#ourPoke').append(ourPoke.img)
  //tells us who are pokemon is going to be
  createModal('Your pokémon is ' + ourPoke.name)
  // creates and attachs our battle button, when clicked will run the start().
  const $battleButton = $('<button>Battle!</button>').attr('id', 'battle')
  $('.container').append($battleButton)
  $($battleButton).on('click', function(){
    game.start();

  })
})

}) //close of window onload
