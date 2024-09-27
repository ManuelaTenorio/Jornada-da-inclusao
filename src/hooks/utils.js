/*
 * Receives a number or array object as a parameter. If it is given a number, it
 * will return a random number ranging from 0 to parameter value. If an array
 * object, it will return a shuffled copy. Otherwise, a TypeError exception is
 * thrown
 */
export function random(item) {
	try {
		if (typeof item == "object") {
			let currIndex = item.length;

			while (currIndex != 0) {
				let randomIndex = Math.floor(Math.random() * currIndex);
				currIndex--;

				[item[currIndex], item[randomIndex]] = [
					item[randomIndex], item[currIndex]
				];
			}

			return item;
		} else if (typeof item == "number") {
			return Math.floor(Math.random() * item);
		} else {
			throw new TypeError;
		}
	} catch (err) {
		console.log("random function only accepts numbers and arrays");
	}
}
