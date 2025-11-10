//async iterator demo
async function* asyncGenerator() {
    const data = [1, 2, 3, 4, 5];
    for (const item of data) {
        // Simulate an asynchronous operation using a timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield item;
    }
}

(async () => {
    const asyncIter = asyncGenerator();
    for await (const value of asyncIter) {
        console.log(value);
    }
})();
// Output: