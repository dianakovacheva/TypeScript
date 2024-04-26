import { Cloth } from "./Cloth";

export class Magazine {
  private type: string;
  private capacity: number;
  private clothes: Cloth[];

  constructor(type: string, capacity: number) {
    this.type = type;
    this.capacity = capacity;
    this.clothes = [];
  }

  addCloth(cloth: Cloth): void {
    if (this.clothes.length < this.capacity) {
      this.clothes.push(cloth);
    }
  }

  removeCloth(color: string): boolean {
    let isRemoved = false;

    const index = this.clothes.findIndex((c) => c.color == color);

    if (index !== -1) {
      this.clothes.splice(index, 1);
      isRemoved = true;
      return isRemoved;
    }

    return isRemoved;
  }

  sortClothsBySize(): Cloth[] {
    const sortedCloths = this.clothes.sort((a, b) => a.size - b.size);

    return sortedCloths;
  }

  getSmallestCloth(): Cloth {
    const sortedClothSizes = this.sortClothsBySize();
    const smallestCloth = sortedClothSizes[0];

    return smallestCloth;
  }

  getCloth(color: string): Cloth {
    const foundCloth = this.clothes.find((cloth) => cloth.color === color);

    return foundCloth;
  }

  getClothCount(): number {
    const clothsNumber = this.clothes.length;

    return clothsNumber;
  }

  report(): string {
    const sortedCloths = this.sortClothsBySize();
    const clothsToReport = sortedCloths
      .map((cloth) => cloth.toString())
      .join("\n");

    const report = `${this.type} magazine contains:\n${clothsToReport}`;

    return report;
  }
}
