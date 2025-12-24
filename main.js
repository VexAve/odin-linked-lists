import LinkedList from "./linked-lists.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("hamster");
list.prepend("snake");
list.prepend("turtle");

console.log(list.toString());