/*Using a HTML/JS file in the browser-
Use axios to get weather data from the API I showed at the start of the lesson
Wrap the axios call in an async function
Use await before the axios call
Destructure the response to get the { data } part of the response
Console.log the weather data (this will show you completed the above)*/

const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=52&lon=-2&appid=9974c4feafd9105689cdf110f3cd977e`;

const getData = async () => {
  const { data } = await axios.get(apiURL);
  console.log(data);
  data.list.forEach((item) => {
    console.log(new Date());
  });
};

getData();
