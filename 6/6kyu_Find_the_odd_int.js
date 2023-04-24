function groupByNumber(array) {
  let map = new Map();
  for (let e of array) {
      map.set(e, map.has(e) ? map.get(e) + 1 : 1);
  }
  return [...map];
}
function findOdd(a) {
  let groups = groupByNumber(a);
  return console.log(groups.find(e => e[1] % 2)[0]);
}
findOdd([0, 1, 0, 0, 0])
