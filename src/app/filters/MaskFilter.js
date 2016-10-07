export function MaskFilter() {
  return function(input) {
    if (!input || input.length != 15) { return; }
    return `${input.substr(0, 3)}*********${input.substr(10, 3)}`;
  }
}
