import React, {useState} from "react";

const BmiCard = () => {
  const [measure, setMeasure] = useState("metric");
  const [heightMetric, setHeightMetric] = useState("");
  const [weightMetric, setWeightMetric] = useState("");
  const [bmiValue, setBmiValue] = useState("");
  const [bmiMessage, setBmiMessage] = useState(
    <div>
      <p className="text-hmd mb-2">Welcome</p>
      <p>Enter your height and weight and you'll see your BMI result here</p>
    </div>
  );

  const onMeasureChange = (e) => {
    setMeasure(e.target.value);
  };

  const getBmiValue = (height, weight) => {
    let bmi;
    if (measure === "metric") {
      bmi = (weight / (height / 100) ** 2).toFixed(1);
      return bmi;
    }

  };

  const onHeightMetricChange = (e) => {
    setHeightMetric(e.target.value);
    setBmiValue(getBmiValue(e.target.value, weightMetric));
  };

  const onWeightMetricChange = (e) => {
    setWeightMetric(e.target.value);
    setBmiValue(getBmiValue(heightMetric, e.target.value));
  };

  return (
    <div className={"rounded shadow-card mx-auto p-6 my-5"}>
      <h2 className="my-6 text-hmd">Enter your details below</h2>
      <form>
        <div className="flex justify-between sm:justify-evenly">
          <label htmlFor="metric" className="flex items-center">
            <input
              type="radio" id="metric" name="measure" value="metric"
              checked={measure === "metric"}
              onChange={onMeasureChange}

            />
            <span className="ml-3">
              metric

            </span>
          </label>
          <label htmlFor="imperial" className="flex items-center">
            <input
              type="radio" id="imperial" name="measure" value="imperial"
              checked={measure === "imperial"}
              onChange={onMeasureChange}
            />
            <span className="ml-3">
              imperial
            </span>
          </label>
        </div>

        {measure === "metric" ? (
          <div className="flex gap-3 flex-wrap my-4">
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
        ) : ("hello")}
      </form>
      {
        bmiMessage
      }

    </div>
  );
};

export default BmiCard;

