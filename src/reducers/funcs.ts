export const updateArray = (arr, item: object, idx: number) => {
  if (idx < 0) {
    return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
  }

  if (idx >= 0) {
    return [...arr.slice(0, idx), item, ...arr.slice(idx + 1)];
  }

  return [item, ...arr];
};
