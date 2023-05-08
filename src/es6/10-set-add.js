const list = new Set();

list.add("item 1");
list.add("item 2").add("item 3");

for (let item of list) {
    console.log(item);
};

