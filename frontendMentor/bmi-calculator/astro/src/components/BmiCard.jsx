import React, {useState} from "react";

const BmiCard = () => {
  const [measure, setMeasure] = useState("metric");
  const [heightMetric, setHeightMetric] = useState(0);
  const [weightMetric, setWeightMetric] = useState(0);
  const onMeasureChange = (e) => {
    setMeasure(e.target.value);

  };

  const getBmiValue = () => {
    if (measure === "metric") {
      return (weightMetric / (heightMetric / 100) ** 2).toFixed(1);
    }

  };

  const onHeightMetricChange = (e) => {
    setHeightMetric(e.target.value);
  };

  const onWeightMetricChange = (e) => {
    setWeightMetric(e.target.value);
  };

  return (
    <div>
      <h2>Enter your details below</h2>
      <form>
        <label htmlFor="metric">
          <input
            type="radio" id="metric" name="measure" value="metric"
            checked={measure === "metric"}
            onChange={onMeasureChange}
          />
          metric
        </label>
        <label htmlFor="imperial">
          <input
            type="radio" id="imperial" name="measure" value="imperial"
            checked={measure === "imperial"}
            onChange={onMeasureChange}
          />
          imperial
        </label>
        {measure === "metric" ? (
          <div>
            <div>
              <label htmlFor="height">Height</label>
              <div className="input-container mt-2 w-4/5 max-w-[18.75rem]">
                <input
                  id="height" name="height" type="number" value={heightMetric}
                  placeholder="0"
                  onChange={onHeightMetricChange}
                />
                <span className="input-container-span ">CM</span>
              </div>
            </div>
            <div>
              <label htmlFor="weight">Weight</label>
              <div className="input-container mt-2 w-4/5 max-w-[18.75rem]">
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


      <p>Your BMI is... <span>Result</span></p>
      <p>
        Your BMI suggests you’re a healthy weight. Your ideal weight is between
        63.3kgs - 85.2kgs.
      </p>
    </div>
  );
};

export default BmiCard;

