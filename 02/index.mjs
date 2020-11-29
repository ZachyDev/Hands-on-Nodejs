const greet = delay => {
    console.log(`Hello after ${ delay } seconds.`);
}

setTimeout(greet, 4000, 4);
setTimeout(greet, 8000, 8);