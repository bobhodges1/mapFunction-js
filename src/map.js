function mapFn(inputArray, callbackFn) {
    let outputArray = []
    for (let item of inputArray) {
        const result = callbackFn(item)
        outputArray.push(result)
        }
    return outputArray
}

export { mapFn };


