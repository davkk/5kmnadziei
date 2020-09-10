export default eventDate => {
  const today = new Date();
  const timeDifference = (new Date(eventDate) - today) / 1000;

  const days = Math.floor(timeDifference / (60 * 60 * 24));
  const hours = Math.floor((timeDifference % (60 * 60 * 24)) / (60 * 60));
  const mins = Math.floor((timeDifference % (60 * 60)) / 60);
  const seconds = Math.floor(timeDifference % 60);

  let countdown = {
    days,
    hours,
    mins,
    seconds,
  };

  return Object.keys(countdown).reduce(
    (acc, key) => ({
      ...acc,
      [key]: `0${countdown[key]}`.slice(-2),
    }),
    {}
  );
};
