export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUAL_THAN: 0
};
export const compareDefault = (a, b) => {
  if (a === b) {
    return Compare.EQUAL_THAN;
  }
return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
export class Node {
  constructor(key){
    this.key = key;
    this.left = null;
    this.right = null;
  }
}