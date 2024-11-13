/**
 * Write an algorithm that receives a string and reverses it
 *
 * hello -> olleh
 * hi -> ih
 *
 */

const reverseString = (str) => {
	let newStr = "";
	for (let i = str.length - 1; i > -1; i--) {
		newStr += str[i];
	}
	return newStr;
};

console.log(reverseString("hello"));
