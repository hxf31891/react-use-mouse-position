<div align="center">
  <a href="https://www.npmjs.com/package/react-use-mouse-position">
    <img alt="npm" src="https://badgen.net/npm/v/react-use-mouse-position?color=2c139f" />
  </a>
  <a href="https://www.npmjs.com/package/react-use-mouse-position">
    <img alt="" src="https://badgen.net/npm/dt/react-use-mouse-position?color=2c139f" />
  </a>
  <a href="https://bundlephobia.com/result?p=react-use-mouse-position">
    <img alt="" src="https://badgen.net/bundlephobia/min/react-use-mouse-position?color=2c139f" />
  </a>
   <a href="https://github.com/hxf31891/react-use-mouse-position/blob/main/LICENSE">
    <img alt="" src="https://badgen.net/github/license/react-use-mouse-position/react-use-mouse-position?color=2c139f" />
  </a>
</div>

# useMousePosition - a custom React hook
- A lightweight (508 B) package to easily track mouse position in React.js
- Very useful for tinder style cards and other dragable elements

## Install
`npm install react-use-mouse-position`

## Example 
```js
import React from 'react'
import { useMousePosition } from 'react-use-mouse-position'

function MyApp() {
  const { mouseX, mouseY } = useMousePosition();
  console.log('mouseX:', mouseX) 

}
```

### `useMousePosition` returns

| Name             | Type         | Default   | Description                                                                      |
| ---------------- | ------------ | --------- | -------------------------------------------------------------------------------- |
| mouseX           | `num`        |           | The mouses current x position                                                    |
| mouseY           | `num`        |           | The mouses current y position                                                    |

## License

Code released under the [MIT](https://github.com/hxf31891/react-use-mouse-position/blob/main/LICENSE) license.
