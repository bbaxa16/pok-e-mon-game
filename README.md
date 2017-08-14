# pok-e-mon-game
Project 1 GA WDI-Gizmo
Brooke Baxa - Project 1

Project name - Pokémon: Baxa Edition

Languages used - HTML, CSS, Javascript, Jquery

Game Summary - A simplified take on the original pokémon videogames, dive into battle against other pokémon, winner is the last one standing.

Game Objective - To outlast your opponents through 3 rounds/battles.

Setup:

To create Pokemon - I created a pokemon class so I would be able to create a variety of different pokemon. This houses their name, level, poketype, and accuracy. There is a get accuracy method that randomizes their accuracy so that way some attacks miss. For now each attack packs a blow of -22 health points. The attack methods are branched out with conditionals based on which poketype your pokemon is.

I created arrays of pokemons that the player will battle with, along with an opponent array. Their are two separate methods to pull random pokemon from each array.

Game logic - I created a game object that houses all our game functions. Everything is based off of buttons and event listeners, and it all starts off our start method, which creates our attack method. There's a method to check if the user won the battle, if they run out of health points there's a game over message, and messages if you win the battle or win the game entirely.

Outside of the game object I created our message modal. This proved to be very tricky to get the all the messages to show up, as some run right after one another, so for now it's based off of a click event listener.

EXTRAS:

I created a few other pages, the How to Play is a brief run down of the game and your objectives. The about designer is just an extra page about myself a video clip I played around with. I created a game inspiration tab that links to the pokemon website, just as a sort of site your source, obviously the game idea itself isn't original, however all my code is.

Unsolved Problems:

I would say two main things: The fact that you have to click the message modal twice to get all your messages to show up is rather wonky. I messed around with some other event listeners, or an event listener on the whole page but those didn't seem to solve the problem. The other issue is you can just keep pressing the attack button without pressing the modal a second time and your poke will just keep attacking without running your opponents attack. My guess is I could house that attack click eventlistener inside a toggle, but with the time I had left I didn't get this in place without breaking the rest of the game.

Stretch ideas: (in dream land where I have all the time in the world)

Make the game objective to level up your pokemon through different battles
Instead of picking a random pokemon for the player, create a choose your pokemon feature
add CSS animation to the pokemon images when they are struck with an attack.
Create different attacks based on poketype that you can choose from. ex if you had a water pokemon you could choose between using water gun, or splash, something like that.
