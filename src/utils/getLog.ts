const getLog = (res: string) => {
  const date = new Date();
  console.log(
    date.getHours() +
      ':' +
      date.getMinutes() +
      ':' +
      date.getSeconds() +
      '\n' +
      JSON.stringify(res)
  );
};

export default getLog;
