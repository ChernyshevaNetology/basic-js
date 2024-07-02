console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

const getNames = () => weapons.map(item => item.name);

const getCountReliableWeapons = (strength) => weapons.filter(item => item.durability > strength).length;

const hasReliableWeapons = (strength) => weapons.find(item => item.durability > strength);

const getReliableWeaponsNames = (strength) => weapons
    .filter(item => item.durability > strength)
    .map(item => item.name);

const getTotalDamage = () => weapons.reduce((acc, {attack}) => acc + attack, 0);

function sleep(milliseconds){
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args){
    // Замедление на половину секунды.
    sleep(1000); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

const compareArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((item, index) => {
        return item === arr2[index];
    });
};

const memorize = (fn, limit) => {
    const memory = [];
    return (...args) => {
        const foundItem = memory.find(item => compareArrays(item.args, args));
        if (foundItem) {
            return foundItem.result;
        } else {
            const newResult = fn(...args);
            if (memory.length === limit) {
                memory.splice(0, 1);
                memory.push({
                    args,
                    result: newResult,
                });
            } else {
                memory.push({
                    args,
                    result: newResult,
                });
            }
            return newResult;
        }
    }
}