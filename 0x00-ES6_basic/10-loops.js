export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx in array) {
    const value = array[idx];
    newArray.push(appendString + value);
  }

  return newArray;
}
