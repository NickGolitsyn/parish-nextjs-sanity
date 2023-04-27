export default function sortDatesAscending(arr) {
  return arr.sort((a, b) => new Date(a.myDate) - new Date(b.myDate));
}