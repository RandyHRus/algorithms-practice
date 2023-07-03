class Trie {
    children: Map<string, Trie>;
    isEnd: boolean;

    constructor() {
        this.children = new Map<string, Trie>();
        this.isEnd = false;
    }

    insert(word: string): void {
        let currNode: Trie = new Trie();
        currNode.children = this.children;
        currNode.isEnd = this.isEnd;

        for (let char of word) {
            if (currNode.children.has(char)) {
                currNode = currNode.children.get(char);
            } else {
                let newNode: Trie = new Trie();
                currNode.children.set(char, newNode);
                currNode = newNode;
            }
        }
        currNode.isEnd = true;
    }

    search(word: string): boolean {
        let currNode: Trie = new Trie();
        currNode.children = this.children;
        currNode.isEnd = this.isEnd;

        for (let char of word) {
            if (!currNode.children.has(char)) {
                return false;
            }
            currNode = currNode.children.get(char);
        }
        return currNode.isEnd == true;
    }

    startsWith(prefix: string): boolean {
        let currNode: Trie = new Trie();
        currNode.children = this.children;
        currNode.isEnd = this.isEnd;

        for (let char of prefix) {
            if (!currNode.children.has(char)) {
                return false;
            }
            currNode = currNode.children.get(char);
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
