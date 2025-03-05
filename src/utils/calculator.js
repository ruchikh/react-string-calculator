
export function add(numbers) {
	if (!numbers) return 0;

	let delimiter = /[,|\n.]/;

	if (numbers.startsWith("//")) {
		const delimiterEnd = numbers.indexOf("\n");
		let customDelimiter = numbers.substring(2, delimiterEnd);
		delimiter = new RegExp(customDelimiter, "g");
		numbers = numbers.substring(delimiterEnd + 1);
	}

	const numArray = numbers.split(",").map(Number);
	const negatives = numArray.filter(num => num < 0);
	if (negatives.length > 0) {
		throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
	}

	return numbers.split(delimiter).map(Number).reduce((sum, num) => sum + num, 0);
}
