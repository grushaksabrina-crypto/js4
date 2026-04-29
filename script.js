// Шаг 1. Класс Item
class Item {
    constructor(name, weight, rarity) {
        this.name = name;
        this.weight = weight;
        this.rarity = rarity;
    }

    getInfo() {
        return `Предмет: ${this.name}, Вес: ${this.weight}, Редкость: ${this.rarity}`;
    }

    setWeight(newWeight) {
        this.weight = newWeight;
    }
}

// Шаг 2. Класс Weapon (наследуется от Item)
class Weapon extends Item {
    constructor(name, weight, rarity, damage, durability) {
        super(name, weight, rarity); // Вызываем конструктор родителя
        this.damage = damage;
        this.durability = durability;
    }

    use() {
        if (this.durability > 0) {
            this.durability -= 10;
            console.log(`${this.name} использован. Прочность: ${this.durability}`);
        } else {
            console.log(`${this.name} сломан! Нужно починить.`);
        }
    }

    repair() {
        this.durability = 100;
        console.log(`${this.name} полностью починен.`);
    }
}

// Шаг 3. Тестирование
const potion = new Item("Зелье лечения", 0.5, "common");
console.log(potion.getInfo());

const sword = new Weapon("Огненный меч", 5.0, "legendary", 50, 100);
console.log(sword.getInfo());
sword.use();
sword.repair();






// Item
function Item(name, weight, rarity) {
    this.name = name;
    this.weight = weight;
    this.rarity = rarity;
}

Item.prototype.getInfo = function() {
    return `Предмет: ${this.name}`;
};

// Weapon
function Weapon(name, weight, rarity, damage, durability) {
    Item.call(this, name, weight, rarity);

    this.damage = damage;
    this.durability = durability;
}

// наследование
Weapon.prototype = Object.create(Item.prototype);

// методы
Weapon.prototype.use = function() {
    this.durability -= 10;
};

const sword = new Weapon("Меч", 5, "rare", 50, 100);
const empty = null;

console.log(sword?.getInfo?.()); // работает
console.log(empty?.getInfo?.()); // не ломается















