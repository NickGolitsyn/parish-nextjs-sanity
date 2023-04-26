function formatDateStrings(arr) {
  return arr.map(item => {
    const date = new Date(item.myDate);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return { ...item, myDate: formattedDate };
  });
}