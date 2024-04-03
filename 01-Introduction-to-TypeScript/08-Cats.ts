class Cat {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  meow() {
    console.log(`${this.name}, age ${this.age} says Meow`);
  }
}

function useClassCat(catsDataArray: any[]) {
  for (let i = 0; i < catsDataArray.length; i++) {
    let currCatInfo = catsDataArray[i].split(" ");
    let name: string, age: number;
    [name, age] = [currCatInfo[0], currCatInfo[1]];

    const greeting = new Cat(name, age);
    greeting.meow();
  }
}

useClassCat(["Mellow 2", "Tom 5"]);
useClassCat(["Candy 1", "Poppy 3", "Nyx 2"]);
