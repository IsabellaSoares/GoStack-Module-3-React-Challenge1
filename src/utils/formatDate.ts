const formatDate = (date: Date): string => {
  const convertedDate = new Date(date);

  return `${convertedDate.getDate()}/${convertedDate.getMonth()}/${convertedDate.getFullYear()}`;
};

export default formatDate;
