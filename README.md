frontend-nanodegree-arcade-game
===============================


# Getting Started
## Loading the Game
To load the game, simply open the `index.html` file in your webbrowser. Or, you
can also go [here](https://jvinniec.github.io/frontend-nanodegree-arcade-game/)
to play the version on the master branch.

## Movement
Player movement is handled in the same way as most normal games using the direction keys.

<img src="images/Arrow_keys.jpg" title="Image credit: Lars H. Rohwedder (User:RokerHRO) - selfmade picture, Public Domain, https://commons.wikimedia.org/w/index.php?curid=2227002" width="200">

where:
- **Up** : Moves player up
- **Down** : Moves player one block down
- **Left** : Moves player one block left
- **Right** : Moves player one block right

## Game Play
The goal of the game is to move the player from the starting position all the way to the water (blue squares) on the other side:

<img src="images/water-block.png" title="Water block (this is your goal)" width="50px">

This must be done while avoiding the enemy characters:

<img src="images/enemy-bug.png" title="Enemy bug (avoid these at all cost!)" width="50px">

# TODO
Following are a list of features that I would like to implement:

**Score counter**
* [x] Count of successes/failures
* [ ] Require obtaining a special object before completion
* [ ] Avatar selection


# The Original TODO List
Following are the base instructions outlined for the project from the Udacity course:

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

**Add Instructions:**
* [x] How to load the game
* [x] How to play the game

**Game functionality:**
* [x] Allow players to move around

**Enemy functionality:**
* [x] The Enemy function, which initiates the Enemy by:
    * [x] Loading the image by setting this.sprite to the appropriate image in the image folder
    * [x] Setting the Enemy initial location
    * [x] Setting the Enemy speed
* [x] The update method for the Enemy
    * [x] Updates the Enemy location
    * [x] Handles collision with the Player

**Player functionality:**
* [x] The Player function, which initiates the Player by:
    * [x] Loading the image by setting this.sprite to the appropriate image in the image folder
    * [x] Setting the Player initial location
* [x] The update method for the Player
* [x] The render method for the Player
* [x] The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input. In particular:
    * [x] Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down.
    * [x] Recall that the player cannot move off screen
* [x] If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that).

**Instantiate objects**
* [x] Creating a new Player object
* [x] Creating several new Enemies objects and placing them in an array called allEnemies
