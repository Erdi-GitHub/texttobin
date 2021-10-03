texttobin
=
Module and CLI tool for converting text to binary
-

**Installation**: `npm i texttobin`

**Installation for CLI usage**: `sudo npm i texttobin -g`

**Example CLI usage**:
> to-bin Hello World...!

**Result**: `[ '01001000', '01100101', '01101100', '01101100', '01101111', '00100000', '01010111', '01101111', '01110010', '01101100', '01100100', '00101110', '00101110', '00101110', '00100001' ]`

**Example usages in code**:
```javascript
require("texttobin");

"Hello World...!".toBinary();
/*
Result:
[ '01001000', '01100101', '01101100', '01101100', '01101111', '00100000', '01010111', '01101111', '01110010', '01101100', '01100100', '00101110', '00101110', '00101110', '00100001' ]
*/
```

```javascript
const toBinary = require("texttobin");

toBinary("Hello World...!");
/*
Result:
[ '01001000', '01100101', '01101100', '01101100', '01101111', '00100000', '01010111', '01101111', '01110010', '01101100', '01100100', '00101110', '00101110', '00101110', '00100001' ]
*/
```

```javascript
const texttobin = require("texttobin");

texttobin.toBinary("Hello World...!");
/*
Result:
[ '01001000', '01100101', '01101100', '01101100', '01101111', '00100000', '01010111', '01101111', '01110010', '01101100', '01100100', '00101110', '00101110', '00101110', '00100001' ]
*/
```