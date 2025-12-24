import LinkedList from "./linked-lists.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.insertAt(3, "turtle", "rabbit", "human");
list.removeAt(4);

console.log(list.toString());