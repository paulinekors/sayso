export const getFormattedDate = (date) => {
  try {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
      date,
    );
    return formattedDate;
  } catch (_e) {
    return 'Unknown date';
  }
};


// const getFormattedDate = (date, options) => {
//   try {
//     return new Intl.DateTimeFormat('en-US', options).format(date);
//   } catch (_e) {
//     return "Unknown date";
//   }
// };
// const options = { year: 'numeric', month: 'long', day: 'numeric' }

// getFormattedDate(new Date("abc"), options)
