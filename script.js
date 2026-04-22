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






// Функция-конструктор Item
function ItemConstructor(name, weight, rarity) {
    this.name = name;
    this.weight = weight;
    this.rarity = rarity;

    this.getInfo = function() {
        return `Предмет: ${this.name}, Вес: ${this.weight}, Редкость: ${this.rarity}`;
    };
}

// Функция-конструктор Weapon
function WeaponConstructor(name, weight, rarity, damage, durability) {
    // Вызываем конструктор Item для текущего объекта (this)
    ItemConstructor.call(this, name, weight, rarity);
    
    this.damage = damage;
    this.durability = durability;

    this.use = function() {
        if (this.durability > 0) this.durability -= 10;
    };
}

//ДЕМОНСТРАЦИЯ 

const inventory = {
    activeWeapon: new WeaponConstructor("Лук", 1.5, "rare", 20, 100),
    utility: null // Предмета нет
};

// Используем опциональную цепочку ?.
// Если utility равно null, программа не выдаст ошибку, а просто ничего не выведет
console.log("Инфо о предмете:", inventory.utility?.getInfo?.()); 

// А здесь всё сработает
console.log("Инфо об оружии:", inventory.activeWeapon?.getInfo?.());





















