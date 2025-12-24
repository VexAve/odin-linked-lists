class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    #head = null;
    #tail = null;
    #size = 0;

    append(value) {
        const newNode = new Node(value);
        this.#size++;
        if (this.#tail === null) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            this.#tail.nextNode = newNode;
            this.#tail = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        this.#size++;
        if (this.#head === null) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            newNode.nextNode = this.#head;
            this.#head = newNode;
        }
    }

    size() {
        return this.#size;
    }

    head() {
        if (this.#head !== null) {
            return this.#head;
        }
    }

    tail() {
        if (this.#tail !== null) {
            return this.#tail;
        }
    }

    at(index) {
        let currentNode = this.#head, currentIndex = 0;
        while (currentNode !== null) {
            if (currentIndex === index) {
                return currentNode;
            }
            currentNode = currentNode.nextNode;
            currentIndex++;
        }
    }

    pop() {
        if (this.#head !== null) {
            const temp = this.#head.value;
            this.#head = this.#head.nextNode;
            return temp;
        }
        this.#size--;
    }

    contains(value) {
        let currentNode = this.#head;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    findIndex(value) {
        let currentNode = this.#head, currentIndex = 0;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return currentIndex;
            }
            currentNode = currentNode.nextNode;
            currentIndex++;
        }
        return -1;
    }

    toString() {
        let str = "", currentNode = this.#head;
        while (currentNode !== null) {
            str += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        return str + "null";
    }

    insertAt(index, ...values) {
        if (index < 0 || index > this.#size) {
            throw RangeError("Index out of bounds.")
        }
        
        const sublist = new LinkedList();
        for (const value of values) {
            sublist.append(value);
        }
        this.#size += values.length;

        if (index === 0) {
            sublist.tail().nextNode = this.#head;
            this.#head = sublist.head();
        } else {
            const justBefore = this.at(index - 1);
            sublist.tail().nextNode = justBefore.nextNode;
            justBefore.nextNode = sublist.head();
        }
    }

    removeAt(index) {
        if (index < 0 || index >= this.#size) {
            throw RangeError("Index out of bounds.");
        }
        this.#size--;

        if (index === 0) {
            this.#head = this.#head.nextNode;
        } else {
            this.at(index - 1).nextNode = this.at(index).nextNode;
        }
    }
}

export default LinkedList;