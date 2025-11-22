export function swap(arr) {
  // Функция меняет первое и последнее значения массива
  if (arr.length === 1) {
    return arr;
  }
  const firstSwapVar = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = firstSwapVar;
  return arr;
}

export const addPrefix = (arr, prefix) =>
  arr.map((element) => `${prefix} ${element}`);

export const flatten = (arr) => {
  // Функция убирает вложенность в массивах
  const result = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      result.push(...flatten(element)); // Рекурсивно добавляем
    } else {
      result.push(element);
    }
  }
  return result;
};

export const getDomainInfo = (domainLink) => {
  // Функция для получения домена сайта(http или https)
  const parts = domainLink.split("://");
  if (parts.length === 2) {
    const link = parts[1];
    const protocol = parts[0];
    console.log(parts);
    const info = { scheme: protocol, name: link };
    return info;
  }
  console.log(parts);
  const protocol = "http";
  const link = parts[0];
  const info = { scheme: protocol, name: link };
  return info;
};

export const countWords = (text) => {
  // Функция считает количество одинаковых слов в строке
  const result = {};
  const words = text.toLowerCase().split(" ");
  for (const name of words) {
    if (result.hasOwnProperty(name)) {
      result[name] += 1;
    } else {
      result[name] = 1;
    }
  }
  return result;
};
