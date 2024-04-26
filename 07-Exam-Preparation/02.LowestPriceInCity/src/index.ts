const inputData: string[] = [
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
];

interface Product {
  townName: string;
  productName: string;
  productPrice: number;
}

function findCheapestProduct(input: string[]): void {
  let resultOutput: Object = {};

  input.forEach((inputData) => {
    const [townName, productName, productPrice] = inputData.split(" | ");
    const price = Number(productPrice);

    if (
      !resultOutput.hasOwnProperty(productName) ||
      resultOutput[productName][price] > price
    ) {
      resultOutput[productName] = [price, townName];
    }

    // if (!resultOutput.includes(productName)) {
    //   resultOutput.push(productName, productPrice, townName);
    // } else {
    //   if (Number(productPrice) < Number(resultOutput[1])) {
    //     resultOutput[1] = productPrice;
    //   }
    // }

    // console.log(`${productName} -> ${productLowestPrice} (${townName})`);
  });

  for (const product in resultOutput) {
    console.log(
      `${product} -> ${resultOutput[product][0]} (${resultOutput[product][1]})`
    );
  }
}

findCheapestProduct(inputData);
