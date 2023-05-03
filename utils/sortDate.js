export default function sortDatesAscending(arr, isService) {
  if (isService) {
    return arr.sort((a, b) => new Date(a.serviceDate) - new Date(b.serviceDate));
  }
  return arr.sort((a, b) => new Date(a.activityDate) - new Date(b.activityDate));
}