const getValues = () => {
  let measurement = document.querySelector("#metric").checked ? "metric" : "imperial";
  document.querySelector("#metric").addEventListener("click", () => {
    if (document.querySelector("#metric").checked) {
      measurement = "metric";
    }
    console.log(measurement);

  });

  document.querySelector("#imperial").addEventListener("click", () => {

    if (document.querySelector("#imperial").checked) {
      measurement = "imperial";
    }
    console.log(measurement);
  });
  return measurement;
};

export default getValues;