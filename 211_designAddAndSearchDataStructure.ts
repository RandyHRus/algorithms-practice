class WordDictionary {
    root: WordDictionary;
    children: Map<String, WordDictionary>;
    isEnd: boolean;

    constructor() {
        this.children = new Map<String, WordDictionary>();
        this.isEnd = false;
        this.root = this;
    }

    addWord(word: string): void {
        let currNode: WordDictionary = this.root;

        for (let char of word) {
            if (currNode.children.has(char)) {
                currNode = currNode.children.get(char);
            } else {
                let newNode: WordDictionary = new WordDictionary();
                currNode.children.set(char, newNode);
                currNode = newNode;
            }
        }
        currNode.isEnd = true;
    }

    search(word: string): boolean {
        let currNode: WordDictionary = this.root;

        for (let i = 0; i < word.length; i++) {
            if (word[i] === ".") {
                return Array.from(currNode.children).some(([key, ch]) => {
                    return ch.search(word.substring(i + 1, word.length));
                });
            } else if (currNode.children.has(word[i])) {
                currNode = currNode.children.get(word[i]);
            } else {
                return false;
            }
        }
        return currNode.isEnd;
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
