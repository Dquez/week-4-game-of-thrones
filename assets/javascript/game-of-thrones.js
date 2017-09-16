$(document).ready(function() {


    // var gandalf = {
    //   "real name": "Gandalf",
    //   "age (est)": 11000,
    //   "race": "Maia",
    //   "haveRetirementPlan": true,
    //   "aliases": [
    //     "Greyhame",
    //     "Stormcrow",
    //     "Mithrandir",
    //     "Gandalf the Grey",
    //     "Gandalf the White"
    //   ]
    // }
    // // Object properties can be accessed with "bracket notation"
    // alert("My name is " + gandalf["real name"]);
    // // Or with "dot notation" if the property has no spaces
    // if (gandalf.haveRetirementPlan) {
    //   // Or with a variable that matches the name of the property
    //   var ageProperty = "age (est)";
    //   var years = gandalf[ageProperty];
    //   alert("My 401k has been gathering interest for " + years + " years!");
    // }
    // // You can access arrays and their properties from an object
    // alert("I have more than " + gandalf.aliases.length + " aliases");



    var jamie = $("#jamie");
    var mountain = $("#mountain");
    var daenerys = $("#daenerys");
    var jon = $("#jon");
    var currentCharacter = $("#current-character");
    var enemyDefender = $("#enemy-defender")
    var waitingCharacters = $(".crystals-container");
    var attack = $("#attack");
    var gameOfThrones = {
        firstCharacter: {
            name: "Jamie Lannister",
            damage: 12,
            health: 175,
            counterDamage: 30,
            attackIncrease: function() {
                this.damage = this.damage += this.damage;
            }
        },
        secondCharacter: {
            name: "The Mountain",
            damage: 30,
            health: 300,
            counterDamage: 50,
            attackIncrease: function() {
                this.damage = this.damage += this.damage;
            }
        },
        thirdCharacter: {
            name: "Daenerys Targaryen",
            damage: 50,
            health: 125,
            counterDamage: 60,
            attackIncrease: function() {
                this.damage = this.damage += this.damage;
            }
        },
        fourthCharacter: {
            name: "Jon Snow",
            damage: 20,
            health: 200,
            counterDamage: 25,
            attackIncrease: function() {
                this.damage = this.damage += this.damage;
            }
        }
    }
    var gameIsOn = true;
    var defenderReady = true;
    $(".crystal-image").on("click", function() {


            if (gameIsOn && defenderReady) {
                currentCharacter.append(this);
                gameIsOn = false;
            } else if (!gameIsOn && defenderReady) {

                enemyDefender.append(this);
                gameIsOn = true;
                defenderReady = false;
            } else {
                return;
            }
    });



    $(attack).on("click", function(){
    	this.enemyDefender.health -= this.currentCharacter.damage;
    	this.currentCharacter.health -= this.enemyDefender.counterDamage;
    	this.currentCharacter.health += this.currentCharacter.damage;
    	$("#current-health").html(this.currentCharacter.health);
    	$("#current-health").html(this.enemyDefender.health);
    	$("#your-attack").css({visibility: "initial"});
    	$("#your-current-damage").html(this.currentCharacter.damage);
    	$("#their-current-damage").html(this.enemyDefender.counterDamage);

    	if (this.currentCharacter.health <= 0) {
    		$("#your-attack").html("You've been defeated..Game over!");
    		$("#their-attack").empty();
    	}
    });


});



// The player must then defeat all of the remaining fighters. Enemies should be moved to a different area of the screen.

// The player chooses an opponent by clicking on an enemy's picture.

// Once the player selects an opponent, that enemy is moved to a defender area.

// The player will now be able to click the attack button.

// Whenever the player clicks attack, their character damages the defender. The opponent will lose HP (health points). These points are displayed at the bottom of the defender's picture.
// The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their HP. These points are shown at the bottom of the player character's picture.
// The player will keep hitting the attack button in an effort to defeat their opponent.

// When the defender's HP is reduced to zero or below, remove the enemy from the defender area. The player character can now choose a new opponent.
// The player wins the game by defeating all enemy characters. The player loses the game the game if their character's HP falls to zero or below.

// Option 2 Game design notes

// Each character in the game has 3 attributes: Health Points, Attack Power and Counter Attack Power.

// Each time the player attacks, their character's Attack Power increases by its base Attack Power.

// For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).
// The enemy character only has Counter Attack Power.

// Unlike the player's Attack Points, Counter Attack Power never changes.
// The Health Points, Attack Power and Counter Attack Power of each character must differ.

// No characters in the game can heal or recover Health Points.

// A winning player must pick their characters wisely by first fighting an enemy with low Counter Attack Power. This will allow them to grind Attack Power and to take on enemies before they lose all of their Health Points. Healing options would mess with this dynamic.
// Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.




// if choose one char, (this)on click append him to current char and the rest to enemies

// if attack is clicked, -- damage number from current enemy.health and --current-character health but enemey's attack damage and at the end, add to current - character's attack damage

// $your-attack.html() = You attacked (current-character-name) for damage.
// current-character-name attacked you back  for (current-damage) damage.
// if my health <= 0 alert you lose, html of $your-attack(You've been defeated..Game over!)"  current-character-name.clear() and show reset button to restart game/variables
// else if enemies health is <= 0 remove display none enemy (might need a flag/lock so health doesn't keep decreasing) $your-attack.html ("You've defeated current enemy, you can choose to fight another enemy.
// when you click a new enemy, your-attack and their-attack go back to normal

// if all the other enemies have 0 health (change html of your-attack to "You won!! Game over!"