
// Define the step sizes in x & y
var ystep = 83;
var xstep = 101;

// Store total wins and losses in a couple global variables
wins  = 0;
loses = 0;

// Base class for all objects that need a sprite
class Sprite {
    constructor(sprite='images/Star.png', x=0, y=0) {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.isFixed = false;
    }

    update() {
        /* Does nothing by default */
    }

    // Draw the sprite on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}


// Enemies our player must avoid
class Enemy extends Sprite {
    constructor(y) {
        super('images/enemy-bug.png', -101, 375-y*ystep);

        // The image/sprite for our enemies
        this.velocity = 50 + 100*Math.random();
        this.reset();
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // Do nothing if we're fixed
        if (!this.isFixed) {
            // Multiply any movement by the dt parameter which will
            // ensure the game runs at the same speed for all computers.
            this.x = this.x + this.velocity * dt;
            if ((this.x > 501)||(this.x < -101)) {
                this.reset();
            }
        }
    }

    // Reset the enemy (used when it reaches a wall)
    reset() {
        //this.x = -101;
        this.velocity = 100 + 200*Math.random();
        if (this.x > 500) {
            this.x = 500;
            this.velocity *= -1;
        } else if (this.x < -101) {
            this.x = -101;
        }
    }
}


// Player class
class Player extends Sprite {
    constructor(sprite, x=null, y=null) {
        super(sprite, 0, 0);

        // Keep track of wins & losses
        this.reset();
        if (x !== null) {
            this.x = x;
        }
        if (y !== null) {
            this.y = y
        }
    }

    // Move the player around
    handleInput(key) {
        // Make sure the avatar can move
        if (!this.isFixed) {
            // Move left
            if ((key === 'left') && (this.x > 1)) {
                this.x -= xstep;
            }
            // Move right
            else if ((key === 'right') && (this.x < 375)) {
                this.x += xstep;
            }
            // Move up
            else if ((key === 'up') && (this.y > 0)) {
                this.y -= ystep;
            }
            // Move down
            else if ((key === 'down') && (this.y < 375)) {
                this.y += ystep;
            }
        }
    }

    // Resets player when they win or lose
    reset() {
        // Update position
        this.x = 2*xstep;
        this.y = 375;
    
        // Update wins/loses
        document.getElementById("score").innerHTML = `Wins: ${wins}, Loses: ${loses}`;
    }

    // The player update method that is responsible for detecting collisions
    // and determining if the player has reached the end
    update() {
        // Loop over the enemies and see if we have any collisions
        if (this.y === -40) {
            setTimeout(() => {
                alert("You Win! :D");
                wins += 1;
                this.reset();
            }, 1);
        }
        for (const enemy of allEnemies) {
            if ((this.y === enemy.y) && (Math.abs(enemy.x - this.x) < 70)) {
                setTimeout(() => {
                    alert("You Lose :(");
                    loses +=1;
                    this.reset();
                }, 1);
                break;
            }
        }
    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy(2);
var enemy2 = new Enemy(3);
var enemy3 = new Enemy(4);
var enemy4 = new Enemy(1);
var allEnemies = [
    enemy1, 
    enemy2,
    enemy3,
    enemy4
];

// Place the player object in a variable called player
var player = new Player('images/char-boy.png');

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
