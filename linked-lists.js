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
}

export default LinkedList;