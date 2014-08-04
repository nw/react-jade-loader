
## React Jade Loader

A simple loader plugin for [webpack](http://http://webpack.github.io/) to transform [react-jade](https://github.com/ForbesLindesay/react-jade) templates.

This is __alpha__ right now. It requires an experimental version of `react-jade` until changes are settled and merged in. 


```bash
  npm install https://github.com/nw/react-jade/archive/0.1.2-alpha.tar.gz --save
  npm install react-jade-loader --save-dev
```

### Usage

Inside your `webpack` config add a loader.

```js
    module: {
      loaders: [
        { test: /\.jade$/, loader: "react-jade-loader" }
      ]
    }
```

### License

The MIT License (MIT)

Copyright (c) 2014 Nathan White

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.