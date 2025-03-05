import { useState } from "react";
import { add } from "./utils/calculator";

const StringCalculator = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState(null);
	const [error, setError] = useState("");

	const handleCalculate = () => {
		try {
			const sum = add(input);
			setResult(sum);
			setError(null);
		} catch (err) {
			setError(err.message);
			setResult(null);

		}
	};

	return (
		<div>
			<h2>String Calculator</h2>
			<input type="text" placeholder="Enter numbers..." value={input} onChange={(e) => setInput(e.target.value)} />
			<button onClick={handleCalculate}>Calculate</button>
			{result !== null && <p>Result: {result}</p>}
			{error && <p style={{ color: 'red' }}>Error: {error}</p>}
		</div>
	);
};

export default StringCalculator;
