const flattenObject = (obj, parentKey = '') => {
	let string = '';
	for (key in obj) {
		propName = parentKey ? `${parentKey}.${key}` : key;
		if (typeof obj[key] === 'object') {
			string += flattenObject(obj[key], propName);
		} else {
			string += propName + ':' + obj[key] + ', ';
		}
	}
	return string;
};

const object = {
	a: {
		b: 1,
		c: 2,
	},
	d: 1,
	e: {
		f: 3,
		g: 4,
	},
	h: 7,
	i: {
		j: {
			k: {
				l: {
					m: 12000,
				},
			},
		},
	},
};

const str = flattenObject(object);
console.log('str', str);

// #Solution 1
// const flattenObject = (obj, string = '') => {
// 	for (key in obj) {
// 		if (typeof obj[key] === 'object') {
// 			for (k in obj[key]) {
// 				string += key + '.' + k + ': ' + obj[key][k] + ', ';
// 			}
// 		} else {
// 			string += key + ':' + obj[key] + ', ';
// 		}
// 	}
// 	return string;
// };

// #Solution 2

// const flattenObject = (obj, parentKey = '') => {
// 	let flattened = '';

// 	for (let key in obj) {
// 		const propName = parentKey ? `${parentKey}.${key}` : key;
// 		if (
// 			typeof obj[key] === 'object' &&
// 			obj[key] !== null &&
// 			!Array.isArray(obj[key])
// 		) {
// 			flattened += flattenObject(obj[key], propName);
// 		} else {
// 			flattened += propName + ':' + obj[key] + ', ';
// 		}
// 	}
// 	return flattened;
// };
