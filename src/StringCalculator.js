import { useState } from "react";

const StringCalculator = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState(null);

	return (
		<div>
			<h2>String Calculator</h2>
			<input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
			<button>Calculate</button>
			{result !== null && <p>Result: {result}</p>}
		</div>
	);
};

export default StringCalculator;
