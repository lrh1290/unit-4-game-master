// Characters
var frodo = {
    name: 'Frodo',
    id: 'frodo',
    health: 150,
    attack: 20,
    counterAttack: 25
};

var merry = {
    name: 'Merry',
    id: 'merry',
    health: 75,
    attack: 10,
    counterAttack: 20
}

var pippin = {
    name: 'Pippin',
    id: 'pippin',
    health: 100,
    attack: 25,
    counterAttack: 30
};

var sam = {
    name: 'Sam',
    id: 'sam',
    health: 100,
    attack: 25,
    counterAttack: 30
}

var attacker = {};
var defender = {};
var attackerSelected = false;
var defenderSelected = false;
var attackerHealth = 0;
var defenderHealth = 0;

// Choose a character
function chooseAttacker(chosenCharacter) {
    attacker.name = chosenCharacter.name;
    attacker.id = chosenCharacter.id;
    attacker.health = chosenCharacter.health;
    attacker.attack = chosenCharacter.attack;
    attacker.counterAttack = chosenCharacter.counterAttack;
    attackerSelected = true;
}


function chooseDefender(chosenCharacter) {
    defender.name = chosenCharacter.name;
    defender.id = chosenCharacter.id;
    defender.health = chosenCharacter.health;
    defender.attack = chosenCharacter.attack;
    defender.counterAttack = chosenCharacter.counterAttack;
    defenderSelected = true;
}

function updateHealth() {
    attackerHealth = attacker.health - defender.attack;
    attacker.health = attackerHealth;

    defenderHealth = defender.health - attacker.attack;
    defender.health = defenderHealth;
    attacker.attack += attacker.counterAttack;

    if (attacker.id == 'frodo') {
        $("#frodo-health").text(attackerHealth);
    } else if (attacker.id == 'merry') {
        $("#merry-health").text(attackerHealth);
    } else if (attacker.id == 'pippin') {
        $("#pippin-health").text(attackerHealth);
    } else if (attacker.id == 'sam') {
        $("#sam-health").text(attackerHealth);
    };

    if (defender.id == 'frodo') {
        $("#frodo-health").text(defenderHealth);
    } else if (defender.id == 'merry') {
        $("#merry-health").text(defenderHealth);
    } else if (defender.id == 'pippin') {
        $("#pippin-health").text(defenderHealth);
    } else if (defender.id == 'sam') {
        $("#sam-health").text(defenderHealth);
    };
};

function fight() {
    if (defender.health > 0) {
        updateHealth();
    } else {
        if (defender.id == 'frodo') {
            $("#frodo").hide();
        } else if (defender.id == 'merry') {
            $("#merry").hide();
        } else if (defender.id == 'pippin') {
            $("#pippin").hide();
        } else if (defender.id == 'sam') {
            $("#sam").hide();
        };
        defenderSelected = false;
    };
};

// Document.ready
$(document).ready(function () {

    // On clicking a character
    $(".character-box").on("click", function () {

        if ($(this).attr("id") == "frodo") {
            var userChoice = frodo;
        } else if ($(this).attr("id") == "merry") {
            var userChoice = merry;
        } else if ($(this).attr("id") == "pippin") {
            var userChoice = pippin;
        } else if ($(this).attr("id") == "sam") {
            var userChoice = sam;
        };

        if (!attackerSelected) {
            $(this).appendTo("#your-character");
            $(this).hide();
            $(this).css("display", "block");
            console.log("Character: " + userChoice.name);
            chooseAttacker(userChoice);
        } else if (!defenderSelected) {
            $(this).appendTo("#enemy-character");
            $(this).hide();
            $(this).css("display", "block");
            console.log("Enemy: " + userChoice.name);           
            chooseDefender(userChoice);
        };
    });

    // On clicking "attack"
    $(".btn").on("click", function() {
        
        fight();


    });

});