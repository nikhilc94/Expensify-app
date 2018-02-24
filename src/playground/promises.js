const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('This is my resolved data');
	}, 2500);
});

console.log("Before");

promise.then((data) => {
	console.log('1', data);
}).catch((error) => {
	console.log('error: ', error)
});

console.log("After");