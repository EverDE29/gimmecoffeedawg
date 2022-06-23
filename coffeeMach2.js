const input = require('prompt-sync')();

const espressoWater = 250;
const espressoCoffeeBeans = 16;
const espressoPrice = 4;
const latteWater = 350;
const latteMilk = 75;
const latteCoffeeBeans = 20;
const lattePrice = 7;
const cappuccinoWater = 200;
const cappuccinoMilk = 100;
const cappuccinoCoffeeBeans = 12;
const cappuccinoPrice = 6;

function printResources(water, milk, coffeeBeans, cups, sCups, mCups, lCups, money) {
    console.log(`The coffee machine has:
${water} ml of water
${milk} ml of milk
${coffeeBeans} g of coffee beans
${cups} disposable cups (${sCups} small cups, ${mCups} medium cups, ${lCups} large cups)
$${money} of money`);
}

function sizeOption(input, coffee) {
    switch (input) {
        case "1":
            if (sCups >= 1) {
                console.log(`One small ${coffee} coming up!`);
                sCups--;
                cups--;
            } else {
                console.log("No remaining small cups available!");
            }
            break;
        case "2":
            if (mCups >= 1) {
                console.log(`One medium ${coffee} coming up!`);
                mCups--;
                cups--;
            } else {
                console.log("No remaining medium cups available!");
            }
            break;
        case "3":
            if (lCups >= 1) {
                console.log(`One large ${coffee} coming up!`);
                lCups--;
                cups--;
            } else {
                console.log("No remaining large cups available!");
            }
            break;
        default:
            console.log("Unknown input size");
            break;
    }
}

let water = 400;
let milk = 540;
let coffeeBeans = 120;
let sCups = 4;
let mCups = 3;
let lCups = 2;
let cups = sCups + mCups + lCups;
let money = 550;

let yeahThatsTrue = true;

do {
    console.log("Write action (buy, fill, take, remaining, exit):");
    let action = input();

    switch (action) {
        case "buy":
            console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
            let coffee = input();
            if (coffee === "1") {
                if (water >= espressoWater && coffeeBeans >= espressoCoffeeBeans && cups >= 1) {
                    console.log("I have enough resources, making you a coffee!");
                    water -= espressoWater;
                    coffeeBeans -= espressoCoffeeBeans;
                    money += espressoPrice;
                    console.log("What size cup do you want? 1 - small, 2 - medium, 3 - large:")
                    let size = input();
                    sizeOption(size, "espresso");
                } else if (water < espressoWater) {
                    console.log("Sorry, not enough water!");
                } else if (coffeeBeans < espressoCoffeeBeans) {
                    console.log("Sorry, not enough coffee beans!");
                } else if (cups < 1) {
                    console.log("Sorry, not enough cups!");
                }
            } else if (coffee === "2") {
                if (water >= latteWater && milk >= latteMilk && coffeeBeans >= latteCoffeeBeans && cups >= 1) {
                    console.log("I have enough resources, making you a coffee!");
                    water -= latteWater;
                    milk -= latteMilk;
                    coffeeBeans -= latteCoffeeBeans;
                    money += lattePrice;
                    console.log("What size cup do you want? 1 - small, 2 - medium, 3 - large:")
                    let size = input();
                    sizeOption(size, "latte");
                } else if (water < latteWater) {
                    console.log("Sorry, not enough water!");
                } else if (milk < latteMilk) {
                    console.log("Sorry, not enough milk!");
                } else if (coffeeBeans < latteCoffeeBeans) {
                    console.log("Sorry, not enough coffee beans!");
                } else if (cups < 1) {
                    console.log("Sorry, not enough cups!");
                }
            } else if (coffee === "3") {
                if (water >= cappuccinoWater && milk >= cappuccinoMilk && coffeeBeans >= cappuccinoCoffeeBeans && cups >= 1) {
                    console.log("I have enough resources, making you a coffee!");
                    water -= cappuccinoWater;
                    milk -= cappuccinoMilk;
                    coffeeBeans -= cappuccinoCoffeeBeans;
                    money += cappuccinoPrice;
                    console.log("What size cup do you want? 1 - small, 2 - medium, 3 - large:")
                    let size = input();
                    sizeOption(size, "cappuccino");
                } else if (water < cappuccinoWater) {
                    console.log("Sorry, not enough water!");
                } else if (milk < cappuccinoMilk) {
                    console.log("Sorry, not enough milk!");
                } else if (coffeeBeans < cappuccinoCoffeeBeans) {
                    console.log("Sorry, not enough coffee beans!");
                } else if (cups < 1) {
                    console.log("Sorry, not enough cups!");
                }
            }
            break;
        case "fill":
            console.log("Write how many ml of water you want to add:");
            let addedWater = input() - 0;
            water += addedWater;
            console.log("Write how many ml of milk you want to add:");
            let addedMilk = input() - 0;
            milk += addedMilk;
            console.log("Write how many grams of coffee beans you want to add:");
            let addedCoffeeBeans = input() - 0;
            coffeeBeans += addedCoffeeBeans;
            console.log("Write how many small disposable coffee cups you want to add:");
            let addedSCups = input() - 0;
            sCups += addedSCups;
            cups += addedSCups;
            console.log("Write how many medium disposable coffee cups you want to add:");
            let addedMCups = input() - 0;
            mCups += addedMCups;
            cups += addedMCups;
            console.log("Write how many large disposable coffee cups you want to add:");
            let addedLCups = input() - 0;
            lCups += addedLCups;
            cups += addedLCups;
            break;
        case "take":
            console.log(`I gave you $${money}`);
            money -= money;
            break;
        case "remaining":
            printResources(water, milk, coffeeBeans, cups, sCups, mCups, lCups, money);
            break;
        case "exit":
            yeahThatsTrue = false;
            break;
        default:
            break;
    }

} while (yeahThatsTrue);
