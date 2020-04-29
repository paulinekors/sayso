export const getFormattedDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    console.log(formattedDate);
    return formattedDate;
  };

  