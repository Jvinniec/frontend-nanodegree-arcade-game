
var selectedAvatar = '';
var avatarSelected = false;

// This class handles user input on the avatar selection screen
class Selector extends Player {
    constructor(sprite, x, y, avatarList) {
        super(sprite, x, y);
        this.avatarList = avatarList;
    }

    handleSelection(key) {
        // Make sure the code
        if (key === 'select') {
            // Loop over all the avatars to find the one standing here
            this.avatarList.forEach(element => {
                if ((this.x === element.x) && (this.y === element.y)) {
                    selectedAvatar = element.sprite;
                }
            });

            // Broadcast that an avatar has been selected
            if (selectedAvatar !== '') {
                avatarSelected = true;
            }
        }
    }
};


// Instantiate a group of possible player avatars
//var avatar1 = new Player('images/char-boy.png',0,375-ystep);
//var avatar2 = new Player('images/char-cat-girl.png',avatar1.x+xstep,avatar1.y);
//var avatar3 = new Player('images/char-horn-girl.png',avatar1.)
var allAvatars = [
    new Player('images/char-boy.png',0*xstep,375),
    new Player('images/char-cat-girl.png',1*xstep,375),
    new Player('images/char-horn-girl.png',2*xstep,375),
    new Player('images/char-pink-girl.png',3*xstep,375),
    new Player('images/char-princess-girl.png',4*xstep,375)
];

// Instantiate the selector object
var selector = new Selector('images/Selector.png', 
                            allAvatars[0].x, allAvatars[0].y, allAvatars);

// This listens for key presses and sends the keys to the
// Selector.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        13: 'select'
    };

    selector.handleInput(allowedKeys[e.keyCode]);
    selector.handleSelection(allowedKeys[e.keyCode]);
});
