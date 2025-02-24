let map = new Map();

map.set("raj",5);
map.set("amit",7);
map.set("raju",5);
map.set("ak",1);
map.set("jaku",5);

map.set("raju",9);
console.log(map)

console.log(map.has("rau"))
console.log(map.delete("raju"))
console.log(map.size)
console.log(map.get("ak"))
console.log(map.clear)

for(let a of map.keys()){
    console.log(map.get(a))
}