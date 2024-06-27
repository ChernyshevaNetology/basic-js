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

function compareArrays (arr1, arr2){
    if(arr1.every((element, index) => arr2.includes(element))) {
        if(arr1.length === arr2.length) {
            return true;
        }
    }
    return false;
}

function memorize(fn, limit) {
    const memory = [];
    return (...args) => {
        let elem = args;
        const foundItem = memory.find(item => compareArrays(item.args, elem));
        if (foundItem) {
            return memory.result;
        } else {
            const newResult = (...args) => fn;
            return fn(...args);
            const resultAdded = args.reduce((acc, curr) => {
                return {
                    args: [args],
                    result: newResult
                }
            }, 0);
            if (memory.length === limit) {
                memory.splice(0, 1);
            } else {
                memory.push(resultAdded);
            }

        }
    }
}