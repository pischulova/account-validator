export function MaskFilter() {
  return function(item) {
    return `${item.substr(0, 3)}*********${item.substr(10, 3)}`;
  }
}
