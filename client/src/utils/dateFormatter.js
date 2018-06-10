const dateFormatter = date => {
  const d = new Date(date);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const year = d.getFullYear();
  const month = months[d.getMonth()].substring(0, 3);
  const day = d.getDate();

  const hours = d.getHours();
  const minutes = d.getMinutes();

  return `${month} ${day}, ${year}  ${hours}:${minutes}`;
};

export default dateFormatter;
