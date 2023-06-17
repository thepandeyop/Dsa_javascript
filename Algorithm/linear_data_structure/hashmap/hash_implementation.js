class HashMap {
    constructor() {
        this.store = [];
    }
    getHash(value) {
        value = value.toString();
        let sum = 0;
        for (var i = 0, len = value.length; i < len; i++) {
            sum += value.charCodeAt(i);
        }
        return sum;
    }
    set(key, value) {
        const hashValue = this.getHash(key);
        this.store[hashValue] = value;
    }
    get(key) {
        const hashValue = this.getHash(key);
        return this.store[hashValue];
    }
    isExist(key) {
        const hashValue = this.getHash(key);
        return this.store[hashValue] != null;
    }
    remove(key) {
        const hashValue = this.getHash(key);
        this.store[hashValue] = null;
    }
}
const map = new HashMap();
map.set(5, 100);
map.set(8, 200);
console.log(map.get(5));
console.log(map.get(8)); 