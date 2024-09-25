import React from 'react';

export function Random(arr) {
	let currIndex = arr.length;

	while (currIndex != 0) {
		let randomIndex = Math.floor(Math.random() * currIndex);
		currIndex--;

		[arr[currIndex], arr[randomIndex]] = [
			arr[randomIndex], arr[currIndex]
		];
	}

	return arr;
}
