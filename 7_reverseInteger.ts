function reverse(x: number): number {
    let sol: number = 0;
    let pow: number = 1;
    let digitsToAdd: number[] = [];

    let multiplier = x < 0 ? -1 : 1;
    x = x * multiplier;

    // 1024 mod 10 = 4
    // 1020 mod 100 = 20
    while (x != 0) {
        let toSubtract: number = x % Math.pow(10, pow); // 4, 20, 0, 1000
        x -= toSubtract; // 1020, 1000, 1000, 0
        pow += 1;
        let digit = toSubtract / Math.pow(10, pow - 1); // 4, 2, 0, 1
        digitsToAdd.push(digit);
    }

    let digitsCount = digitsToAdd.length;
    for (let i = 0; i < digitsToAdd.length; i++) {
        let numToAdd = digitsToAdd[i] * Math.pow(10, digitsCount - i); // 4000, 200, 0, 1
        sol += numToAdd;
        // check overflow
        // if overflowed, it will wrap around to negative, so we just need to check if it is negative.
        // However, JavaScript does not have Int32 so we have to check if it is larger than Max.Int32
        if (sol < 0 || sol > 2147483647) {
            return 0;
        }
    }
    return sol * multiplier;
}
