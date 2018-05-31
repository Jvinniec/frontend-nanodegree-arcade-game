var ystep  = 83;
var xstep = 100;

// Base class for all objects that need a sprite
var Sprite = function() {
    this.sprite = 'images/star.png';
    this.x = 0;
    this.y = 0;
};

// Default to doing nothing
Sprite.prototype.update = function() {
    
};

// Draw the enemy on the screen, required method for game
Sprite.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Enemies our player must avoid
var Enemy = function(y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.y = 400 - y*ystep;
    this.x = -101;
    this.width = 50;
    this.velocity = 50 + 100*Math.random();
    this.reset();
};
Enemy.prototype = Object.create(Sprite.prototype);
Enemy.prototype.constructor = Enemy;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // Multiply any movement by the dt parameter which will
    // ensure the game runs at the same speed for all computers.
    this.x = this.x + this.velocity * dt;
    if ((this.x > 501)||(this.x<-101)) {
        this.reset();
    }
};

// Reset the enemy character
Enemy.prototype.reset = function() {
    //this.x = -101;
    this.velocity = 100 + 200*Math.random();
    if (this.x > 500) {
        this.x = 500;
        this.velocity *= -1;
    } else if (this.x < -101) {
        this.x = -101;
    }
}

// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.wins = 0;
    this.loses = 0;
    this.reset();
};
Player.prototype = Object.create(Sprite.prototype);
Player.prototype.constructor = Player;

// Move the player around
Player.prototype.handleInput = function(key) {
    
    // Move left
    if ((key === 'left') && (this.x > 1)) {
        this.x -= xstep;
    }
    // Move right
    else if ((key === 'right') && (this.x < 400)) {
        this.x += xstep;
    } 
    // Move up
    else if ((key === 'up') && (this.y > 0)) {
        this.y -= ystep;
    } 
    // Move down
    else if ((key === 'down') && (this.y < 400)) {
        this.y += ystep;
    }
};

Player.prototype.reset = function() {
    // Update position
    this.x = 201;
    this.y = 400;

    // Update wins/loses
    document.getElementById("score").innerHTML = `Wins: ${this.wins}, Loses: ${this.loses}`;
}


// The player update method that is responsible for detecting collisions
// and determining if the player has reached the end
Player.prototype.update = async function() {
//    var endGame = setTimeout(function() {
        // Loop over the enemies and see if we have any collisions
        if (this.y === -15) {
            alert("You Win! :D");
            this.wins += 1;
            this.reset();
        }
        for (const enemy of allEnemies) {
            if ((this.y === enemy.y) && (Math.abs(enemy.x - this.x) < 70)) {
                alert("You Lose :(");
                this.loses +=1;
                this.reset();
                break;
            }
        }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy(2);
var enemy2 = new Enemy(3);
var enemy3 = new Enemy(4);
var allEnemies = [
    enemy1, 
    enemy2,
    enemy3
];

// Place the player object in a variable called player
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
