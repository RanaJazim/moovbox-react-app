function sample(...args) {
    const [start, ...remaining] = args;
    console.log(start);
    console.log(remaining);
}

sample("first", 'second', 'third');