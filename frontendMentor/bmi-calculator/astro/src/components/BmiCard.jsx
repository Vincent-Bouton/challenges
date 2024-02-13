import React, {useState} from "react";

const BmiCard = () => {
  const [measure, setMeasure] = useState("metric");
  const [heightMetric, setHeightMetric] = useState("");
  const [weightMetric, setWeightMetric] = useState("");
  const [bmiValue, setBmiValue] = useState("");

  const yourBmiIs = (bmi, condition, healthyWeight) => {
    return (
      <div
        className="text-pure-white md:flex justify-between items-center p-2"
      >
        <p
          className="text-hmd text-pure-white flex-1 md:pl-6 mb-6 md:mb-2"
        >Your BMI is... <span
          className="text-hxl block font-bold mt-2"
        >{bmi}</span>
        </p>
        <p className="text-bmd mb-2 text-pure-white flex-1">
          Your BMI suggests you’re {condition}. Your ideal weight is
          between <span className="font-bold">{healthyWeight}</span>
        </p>
      </div>
    );
  };

  const welcomeMessage = (
    <div className="text-pure-white  ">
      <p
        className="text-hmd mb-2 text-pure-white"
      >
        Welcome!
      </p>
      <p className="text-pure-white">
        Enter your height and weight and you'll see your BMI result here
      </p>
    </div>
  );

  const [bmiMessage, setBmiMessage] = useState(welcomeMessage);

  const onMeasureChange = (e) => {
    setMeasure(e.target.value);
  };

  const getBmiValue = (height, weight, healthyWeight) => {
    let bmi;
    if (measure === "metric") {
      bmi = (weight / (height / 100) ** 2).toFixed(1);
      console.log(typeof bmi, bmi);
      console.log(healthyWeight);
      // bmi  to number
      bmi = Number(bmi);
      if (isNaN(bmi)) {
        setBmiMessage(welcomeMessage);
        return;

      }
      if (bmi > 100) {
        setBmiMessage(welcomeMessage);
        return;
      }
      if (bmi === 0) {
        setBmiMessage(welcomeMessage);
        return;

      }
      if (bmi > 0 && bmi < 18.5) {
        setBmiMessage(yourBmiIs(bmi, "underweight", healthyWeight));
      }
      if (bmi >= 18.5 && bmi < 24.9) {
        setBmiMessage(yourBmiIs(bmi, "healthy", healthyWeight));
      }
      if (bmi >= 25 && bmi < 29.9) {
        setBmiMessage(yourBmiIs(bmi, "overweight", healthyWeight));
      }
      if (bmi >= 30) {
        setBmiMessage(yourBmiIs(bmi, "obese", healthyWeight));
      }

      return bmi;
    }

  };

  // Function to get healthy weight
  const getHealthyWeight = (height) => {
    let calcHealthyWeight;
    if (measure === "metric") {
      console.log(height);
      calcHealthyWeight = [
        (18.5 * (height / 100) ** 2).toFixed(1),
        (24.9 * (height / 100) ** 2).toFixed(1),
      ];
      return `${calcHealthyWeight[0]} - ${calcHealthyWeight[1]} KG`;
    }
  };
  const onHeightMetricChange = (e) => {
    setHeightMetric(e.target.value);
    setBmiValue(getBmiValue(e.target.value, weightMetric, getHealthyWeight(e.target.value)));
  };

  const onWeightMetricChange = (e) => {
    setWeightMetric(e.target.value);
    setBmiValue(getBmiValue(heightMetric, e.target.value, getHealthyWeight(heightMetric)));

  };

  return (
    <div className={"rounded shadow-card mx-auto p-6 my-5"}>
      <h2 className="my-6 text-hmd">Enter your details below</h2>
      <form>
        <div className="flex justify-between sm:justify-start">
          <label htmlFor="metric" className="flex sm:flex-1 items-center">
            <input
              type="radio" id="metric" name="measure" value="metric"
              checked={measure === "metric"}
              onChange={onMeasureChange}

            />
            <span className="ml-3 font-bold">
              Metric

            </span>
          </label>
          <label htmlFor="imperial" className="flex sm:flex-1 items-center">
            <input
              type="radio" id="imperial" name="measure" value="imperial"
              checked={measure === "imperial"}
              onChange={onMeasureChange}
            />
            <span className="ml-3 font-bold">
              Imperial
            </span>
          </label>
        </div>

        {measure === "metric" ? (
          <div
            className="flex gap-3 flex-wrap md:flex-nowrap my-4 justify-center"
          >
            <div className="max-w-[18.75rem]">
              <label htmlFor="height">Height</label>
              <div
                className="input-container mt-2 flex justify-between"
              >
                <input
                  id="height" name="height" type="number" value={heightMetric}
                  placeholder="0"
                  onChange={onHeightMetricChange}
                />
                <span className="input-container-span">CM</span>
              </div>
            </div>
            <div className="max-w-[18.75rem]">
              <label htmlFor="weight">Weight</label>
              <div className="input-container mt-2 flex justify-between">
                <input
                  id="weight" name="weight" type="number" value={weightMetric}
                  placeholder="0"
                  onChange={onWeightMetricChange}
                />
                <span className="input-container-span ">KG</span>
              </div>
            </div>
          </div>
        ) : (<p>Imperial will be coming soon!</p>)}
      </form>
      <div
        className="bg-primary text-pure-white p-6 mt-6 text-hmd rounded-xl md:rounded-r-full md:rounded-l-3xl"
      >
        {bmiMessage}
      </div>

    </div>
  );
};

export default BmiCard;

