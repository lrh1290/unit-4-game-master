//dom elements
var attacker = {};
var defender = {};
var attackerSelected = false;
var defenderSelected = false;
var attackerHealth = 0;
var defenderHealth = 0;
var currentap = 0;

//characters
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

//choose a defender
function chooseDefender(chosenCharacter) {
    defender.name = chosenCharacter.name;
    defender.id = chosenCharacter.id;
    defender.health = chosenCharacter.health;
    defender.ap = chosenCharacter.ap;
    defender.cp = chosenCharacter.cp
    defenderSelected = true;
}

//update health based off of ap / cp / health
function updateHealth() {
    attackerHealth = attacker.health - defender.ap;
    attacker.health = attackerHealth;
    defenderHealth = defender.health - attacker.ap;
    defender.health = defenderHealth;
    attacker.ap += attacker.ap;

    //update health text

    if (attacker.id == 'frodo') {
        $("#frodo-health").text(attackerHealth);
    } else if (attacker.id == 'sam') {
        $("#sam-health").text(attackerHealth);
    } else if (attacker.id == 'merry') {
        $("#merry-health").text(attackerHealth);
    } else if (attacker.id == 'pippin') {
        $("#pippin-health").text(attackerHealth);
    }
    if (defender.id == 'frodo') {
        $("#frodo-health").text(defenderHealth);
    } else if (defender.id == 'sam') {
        $("#sam-health").text(defenderHealth);
    } else if (defender.id == 'merry') {
        $("#merry-health").text(defenderHealth);
    } else if (defender.id == 'pippin') {
        $("#pippin-health").text(defenderHealth);
    }
}
//update players ap after each attack attacker.ap += 10;
function updateAttack() {
    currentap = attacker.ap;
    //update attack text
    if (attacker.id == 'frodo') {
        $("#frodo-attack").text(currentap);
    } else if (attacker.id == 'sam') {
        $("#sam-attack").text(currentap);
    } else if (attacker.id == 'merry') {
        $("#merry-attack").text(currentap);
    } else if (attacker.id == 'pippin') {
        $("#pippin-attack").text(currentap);
    }
}

function showButton() {
    $(".btn").css('display','block');
}

function animate() {
    $("#animate").css('display','block');
    setTimeout(function(){$("#animate").css('display','none');}, 4800);
}

function explosion() {
    setTimeout(function(){$(".explosion").css('display','block');}, 4800);   
}

function unexplosion() {
    setTimeout(function(){$(".explosion").css('display','none');}, 5100);   
}

function death() {
    if (attacker.health < 1) {
        alert("GAME OVER");
        document.location.reload();
    }
}

//allow fighting if there is an attacker and a defender
function fight() {
    if (attacker.health < 1) {
    } else if (defender.health > 0) {
        updateHealth();
        updateAttack();
        death();
    } else {
        if (defender.id == 'frodo') {
            $("#frodo").hide();
        } else if (defender.id == 'sam') {
            $("#sam").hide();
        } else if (defender.id == 'merry') {
            $("#merry").hide();
        } else if (defender.id == 'pippin') {
            $("#pippin").hide();
        }
        defenderSelected = false;
    }
}

//move characters
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
            chooseAttacker(selection);
        } else if (!defenderSelected) {
            $(this).appendTo("#enemy-character");
            $(this).hide();
            $(this).css("display", "block");         
            chooseDefender(selection);
            showButton();
        };
    });
    $(".btn").on("click", function() {
        fight();
        animate();
        explosion();
        unexplosion();
    });
});

