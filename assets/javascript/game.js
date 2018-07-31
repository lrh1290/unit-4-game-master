var attacker = {};
var defender = {};
var attackerSelected = false;
var defenderSelected = false;
var attackerHealth = 0;
var defenderHealth = 0;
var frodo = {
    name: 'Frodo',
    id: 'frodo',
    health: 150,
    ap: 15,
    cp: 15
};
var merry = {
    name: 'Merry',
    id: 'merry',
    health: 75,
    ap: 50,
    cp: 50
}
var pippin = {
    name: 'Pippin',
    id: 'pippin',
    health: 100,
    ap: 20,
    cp: 20
};
var sam = {
    name: 'Sam',
    id: 'sam',
    health: 200,
    ap: 10,
    cp: 10
}
// Choose a character
function chooseAttacker(chosenCharacter) {
    attacker.name = chosenCharacter.name;
    attacker.id = chosenCharacter.id;
    attacker.health = chosenCharacter.health;
    attacker.ap = chosenCharacter.ap;
    attacker.cp = chosenCharacter.cp;
    attackerSelected = true;
}
function chooseDefender(chosenCharacter) {
    defender.name = chosenCharacter.name;
    defender.id = chosenCharacter.id;
    defender.health = chosenCharacter.health;
    defender.ap = chosenCharacter.ap;
    defender.cp = chosenCharacter.cp;
    defenderSelected = true;
}
function updateHealth() {
    attackerHealth = attacker.health - defender.ap;
    attacker.health = attackerHealth;
    defenderHealth = defender.health - attacker.ap;
    defender.health = defenderHealth;
    attacker.ap += attacker.cp;

    if (attacker.id == 'frodo') {
        $("#frodo-health").text(attackerHealth);
    } else if (attacker.id == 'sam') {
        $("#sam-health").text(attackerHealth);
    } else if (attacker.id == 'merry') {
        $("#merry-health").text(attackerHealth);
    } else if (attacker.id == 'pippin') {
        $("#pippin-health").text(attackerHealth);
    };
    if (defender.id == 'frodo') {
        $("#frodo-health").text(defenderHealth);
    } else if (defender.id == 'sam') {
        $("#sam-health").text(defenderHealth);
    } else if (defender.id == 'merry') {
        $("#merry-health").text(defenderHealth);
    } else if (defender.id == '[pippin]') {
        $("#pippin-health").text(defenderHealth);
    };
};
function fight() {
    if (defender.health > 0) {
        updateHealth();
    } else {
        if (defender.id == 'frodo') {
            $("#frodo").hide();
        } else if (defender.id == 'sam') {
            $("#sam").hide();
        } else if (defender.id == 'merry') {
            $("#merry").hide();
        } else if (defender.id == 'pippin') {
            $("#pippin").hide();
        };
        defenderSelected = false;
    };
};
$(document).ready(function () {
    $(".fighters").on("click", function () {
        if ($(this).attr("id") == "frodo") {
            var selection = frodo;
        } else if ($(this).attr("id") == "sam") {
            var selection = sam;
        } else if ($(this).attr("id") == "merry") {
            var selection = merry;
        } else if ($(this).attr("id") == "pippin") {
            var selection = pippin;
        };
        if (!attackerSelected) {
            $(this).appendTo("#your-character");
            $(this).hide();
            $(this).css("display", "block");
            console.log("Character: " + selection.name);
            chooseAttacker(selection);
        } else if (!defenderSelected) {
            $(this).appendTo("#enemy-character");
            $(this).hide();
            $(this).css("display", "block");
            console.log("Enemy: " + selection.name);           
            chooseDefender(selection);
        };
    });
    $(".btn").on("click", function() {
        fight();
    });
});