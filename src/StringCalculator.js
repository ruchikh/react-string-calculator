import { useState } from "react";
import { add } from "./utils/calculator";
import styles from "./styles.js";

const StringCalculator = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState(null);
	const [error, setError] = useState("");

	const handleCalculate = () => {
		const inputValue = input.replace(/\s/g, '').replace(/\\n/g, '\n');

		try {
			const sum = add(inputValue);
			setResult(sum);
			setError(null);
		} catch (err) {
			setError(err.message);
			setResult(null);

		}
	};

	return (
		<div style={styles.container}>
			<div
				style={styles.calculatorBox}
			>
				<h2>String Calculator</h2>
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Enter numbers..."
					style={styles.inputBox}
				/>
				<button onClick={handleCalculate}
					style={styles.calculateButton}
				>
					Calculate
				</button>
				{result !== null && <p style={styles.result}>Result: {result}</p>}
				{error && <p style={styles.error}>Error: {error}</p>}
			</div>
		</div>
	);
};

export default StringCalculator;
