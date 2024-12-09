import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onsetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How were you satisfied with the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How was your partner satisfied with the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <OutPut tip={tip} bill={bill} />
          <Reset onChange={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onsetBill }) {
  return (
    <div>
      <label>How much did you pay?</label>
      <input
        type="text"
        placeholder="Enter amount"
        value={bill}
        onChange={(e) => onsetBill(e.target.value)}
      />
    </div>
  );
}
function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Not satisfied(0%)</option>
        <option value="5"> Okej(5%) </option>
        <option value="10"> Satisfied(10%) </option>
        <option value="20"> Very Satisfied(20%) </option>
      </select>
    </div>
  );
}
function OutPut({ tip, bill }) {
  return (
    <h3>
      You paid ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onChange }) {
  return <button onClick={onChange}>Reset</button>;
}
