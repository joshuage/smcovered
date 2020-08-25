// @yuchen playground


// function callback() {
// 	console.log('its payback time')
// }

// function a(callback) {
// 	setTimeout(() => {
// 		console.log('time out')
// 		callback()
// 	}, 2000)
// }

// a(() => callback())

// const p = new Promise(async (resolve, reject) => {
// 	let a = 8
// 	let b = 9
// 	console.log('in front !')
// 	// setTimeout(() => console.log('is it right ?'), 2000)
// 	function aa() {
// 		return new Promise(resolve => {
// 			setTimeout(() => {b = 10
// 				resolve(b)}, 2000)
// 		})
// 		// setTimeout(() => {console.log('is it right ?')
// 		// 	}, 2000)
// 	}
// 	resolve(
// 		// function aa() {
// 		// 	setTimeout(() => console.log('is it right ?'), 2000)
// 		// }

// 		// setTimeout(() => console.log('is it right ?'), 2000)

// 		{function: aa, value: b}
// 	)
// })

// p.then((a)=>{
// 	function inHere() { return a.function()}
// 			//console.log('in inHere')}
// 	inHere().then(b => console.log(b))
// })


var a = []
const o = () => {
	a = [...a, {'yes': 'es'}]
	a = [...a, {'w': 'sel'}]
}
// a = [...a, 'yes']
o()
console.log(a)
