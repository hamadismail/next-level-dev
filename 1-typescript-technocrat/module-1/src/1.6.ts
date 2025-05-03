// Regular Function
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}
add(2);

// Arrow Function
const addArrow = (num1: number, num2: number): number => num1 + num2;

// Method -> function inside object
const poorUser = {
  name: 'Mr. X',
  balance: 0,
  addBalance(balance2: number): string {
    return `My balance is ${this.balance + balance2}`;
  },
};

// maped array
const arr: number[] = [2, 5, 8];
const newArr: number[] = arr.map((ele: number): number => ele * ele);
