import cities from "/cities.json";
console.log(cities);
const ShowCity = () => {
  cities.map((city, index) => console.log(city, index));

  return <h1>Hello World</h1>;
};

export default ShowCity;
