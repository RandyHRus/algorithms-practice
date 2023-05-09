function countGoodSubstrings(s: string): number {
    let solutionCount = 0;

    if (s.length < 3) {
        return 0;
    }

    for (let i = 0; i < s.length - 2; i++) {
        if (s[i] != s[i + 1] && s[i] != s[i + 2] && s[i + 1] != s[i + 2]) {
            solutionCount += 1;
        }
    }
    return solutionCount;
}
