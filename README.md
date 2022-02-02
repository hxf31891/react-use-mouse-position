# react-use-mouse-position
A lightweight (1.7 kB) package to easily track mouse position in React.js

## Install
`npm install react-use-mouse-position`

## Example 
```js
import React from 'react'
import { useMousePosition } from 'react-use-mouse-position'

function MyApp() {
  const { mouseX, mouseY } = useMousePosition();
  console.log('mouseX:', mouseX) 

  return (
    <SomeComponent />
  );
}
```
