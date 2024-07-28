// push and return ref to array for chaining
export const cPush = <T>(array: T[], value: T) => {
    array.push(value);
    return array;
}

// push into new array
export const nPush = <T>(array: T[], value: T) => {
    return array.concat([value]);
}
