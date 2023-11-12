type itemList = {
  name: string;
  quantity: number | null;
  price: number | null;
  total: number | null;
};

export function idGenerator() {
  const val = Math.floor(Math.random() * 1000000);
  const n1 = Number(val.toString()[0]) + 64;
  const n2 = Number(val.toString()[1]) + 64;
  return String.fromCharCode(n1, n2) + val.toString().slice(2);
}

export const calcTotal = (arr: itemList[]) => {
  const result = arr.reduce((acc, el) => acc + Number(el.total), 0);
  return result;
};
