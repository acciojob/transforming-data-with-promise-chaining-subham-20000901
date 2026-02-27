//your JS code here. If required.
const userInput = document.getElementById("ip");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

const promise1 =() => {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			resolve(userInput.value);
		},2000)
	})
}
const promise2 =(data) => {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			
			resolve(data * 2);
		},2000)
	})
}
const promise3 =(data) => {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			
			resolve(data - 3);
		},1000)
	})
}
const promise4 = (data) => {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			
			resolve(data/2);
		},1000)
	})
}
const promise5 = (data) => {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
		
			resolve(data + 10);
		},1000)
	})
}

function calculation(){
	promise1()
		.then((res) => {
		output.textContent = `Result: ${res}`;
		return promise2(res);
	}).then((res) =>{
		output.textContent = `Result: ${res}`;
		return promise3(res);
	}).then((res) =>{
		output.textContent = `Result: ${res}`;
		return promise4(res);
	}).then((res) => {
		  output.textContent = `Result: ${res}`;
			return promise5(res);
			
	}).then((res) =>{
    output.textContent = `Final Result: ${res}`;
});
	
}



