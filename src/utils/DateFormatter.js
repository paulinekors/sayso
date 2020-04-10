export const getFormattedDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate;
  };