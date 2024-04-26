"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    type;
    capacity;
    clothes;
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
        let isRemoved = false;
        const index = this.clothes.findIndex((c) => c.color == color);
        if (index !== -1) {
            this.clothes.splice(index, 1);
            isRemoved = true;
            return isRemoved;
        }
        return isRemoved;
    }
    sortClothsBySize() {
        const sortedCloths = this.clothes.sort((a, b) => a.size - b.size);
        return sortedCloths;
    }
    getSmallestCloth() {
        const sortedClothSizes = this.sortClothsBySize();
        const smallestCloth = sortedClothSizes[0];
        return smallestCloth;
    }
    getCloth(color) {
        const foundCloth = this.clothes.find((cloth) => cloth.color === color);
        return foundCloth;
    }
    getClothCount() {
        const clothsNumber = this.clothes.length;
        return clothsNumber;
    }
    report() {
        const sortedCloths = this.sortClothsBySize();
        const clothsToReport = sortedCloths
            .map((cloth) => cloth.toString())
            .join("\n");
        const report = `${this.type} magazine contains:\n${clothsToReport}`;
        return report;
    }
}
exports.Magazine = Magazine;
//# sourceMappingURL=Magazine.js.map