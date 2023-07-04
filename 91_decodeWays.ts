function numDecodings(s: string): number {
    let dict: Map<string, number> = new Map<string, number>();

    return numDecodingsHelper(s, dict);
}

function numDecodingsHelper(s: string, dict: Map<string, number>): number {
    if (s.length == 0) {
        return 1;
    }

    if (s[0] == "0") {
        return 0;
    }

    if (s.length == 1) {
        return 1;
    }

    if (dict.has(s)) {
        return dict.get(s);
    }

    let twoDigitNum: number = parseInt(s.substring(0, 2));
    if (twoDigitNum <= 26) {
        let result =
            numDecodingsHelper(s.substring(1, s.length), dict) +
            numDecodingsHelper(s.substring(2, s.length), dict);
        dict.set(s, result);
        return result;
    } else {
        let result = numDecodingsHelper(s.substring(1, s.length), dict);
        dict.set(s, result);
        return result;
    }
}
