function tsDemo() {
    const userName = 'Sarina';
    var jsMessage = `Moin JavaScript Welt -- ${userName}`;
    
    console.warn(`Run @ ${new Date()}`);
    console.log(jsMessage);
    
    const arr = new Array('jedan', 'dva');
    // const arr = new Array(); arr.push('jedan'); arr.push('dva');
    console.info(`korak 1. arr = ${arr.join(';')}`);
    console.info(`korak 2. arr = ${arr.concat('tri')}`);
    arr.push('četiri')
    console.info(`korak 3. arr = ${arr}`);
    arr.push('pet', 'šest');
    console.info(`korak 4. arr = ${arr}`);
    const lastEl = arr.pop();
    console.info(`korak 5. arr = ${arr}`);
    console.info(`korak 5. lastEl = ${lastEl}`);
}

tsDemo();