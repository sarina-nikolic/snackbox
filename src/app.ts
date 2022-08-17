// import { getConstantValue } from "typescript";
const userName: string = 'Sarina';
var jsMessage: string = `Moin TypeScript Welt -- ${userName}`;

console.warn(`Script run @ ${new Date()}`);
console.log(jsMessage);

const arr: Array<string> = new Array('jedan', 'dva');
console.info(`korak 1. arr = ${arr}`);
console.info(`korak 2. arr = ${arr.concat('tri')}`);
arr.push('četiri')
console.info(`korak 3. arr = ${arr}`);
arr.push('pet', 'šest');
console.info(`korak 4. arr = ${arr}`);
const lastEl = arr.pop();
console.info(`korak 5. arr = ${arr}`);
console.info(`korak 5. lastEl = ${lastEl}`);


