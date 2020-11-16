
# :battery: :battery: transducerJS

transducerJS is a transducer implementation in js based on [Carlos Caballero's one]( https://gist.github.com/Caballerog/79d1cd60afb94d91868a2ab7ce62a41e)

## Installation

You can get it with ```npm```:

```bash
npm i --save transducerJS
```

## Usage

```javascript
const { transducer, filter, map } = require('transducerjs')

const numbers = [1, 2, 3]
const result = transducer(map(x => x * 2), filter(x => x > 2))(numbers)

console.log(result) // [ 4, 6 ]
```

## Contributing

First, clone this repo:

```bash
git clone https://github.com/pabloos/transducerJS.git
```

Add changes and keep the tests suites passed:

```bash
npm test
```

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Acknowledgment

Thanks Carlos Caballero, who make the first implementation

## License

[MIT](https://choosealicense.com/licenses/mit/)
