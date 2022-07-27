This demonstrates that in Chrome dynamic script order 
is not guaranteed.


To use:

run `npm install` then `node index.mjs`.

Go to `http://localhost:3000` and open your console.

You will see the code from 2.js loads before the code from 1.js even though it's added as a script tag later.

You can also observe this is different in firefox.