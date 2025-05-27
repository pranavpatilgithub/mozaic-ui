# mozaic-ui

- A minimal UI component library for building modern web interfaces.
- This is an early-stage library and is continuously evolving.
- Contribution and creativity are welcome 👍

## Features
- Simple and lightweight
- Easy to style and extend
- Built with TypeScript
- Ready-to-use components

## 📦 Installation
```bash
npm install mozaic-ui
# or
yarn add mozaic-ui
```

## Usage 
```
import { Button } from 'mozaic-ui';

function App() {
  return (
    <Button onClick={() => alert('Clicked!')}>Click Me</Button>
    <Button variant="plain" onClick={() => alert('Clicked!')}>Click Me</Button>
    <Button variant="solid" onClick={() => alert('Clicked!')}>Click Me</Button>
    <Button variant="outline" onClick={() => alert('Clicked!')}>Click Me</Button>
  );
}

export default App;
```

## Components
- Button

