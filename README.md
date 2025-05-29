# Mozaic UI 🌟

**Mozaic UI** is a minimal and extensible UI component library for React. It provides reusable, accessible, and customizable components, perfect for modern web interfaces. Built with scalability and developer experience in mind.
**LICENSE** : This project is licensed under the MIT License.
---

## Features

✅ **Lightweight & Modular**  
✅ **Customizable Variants, Sizes, Colors, and Radius**  
✅ **TypeScript Support**  
✅ **Modern CSS Techniques**  
✅ **Design Tokens and Semantic Colors**  
✅ **Ready for Theming & Extensions**

---

## Installation

```bash
npm install mozaic-ui
# or
yarn add mozaic-ui
```



## Usage
```bash
import { Button } from 'mozaic-ui';

function App() {
  return (
    <>
      <Button onClick={() => alert('Clicked!')}>Default</Button>
      <Button variant="plain">Plain</Button>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button size="lg" color="success">Success Large</Button>
      <Button color="danger-outline" radius="rounded-full">Danger Outline</Button>
    </>
  );
}

export default App;
```

## Components
- Button : A versatile and customizable button component with support for variants, sizes, colors, and border radius.
- Props
variant ```	'solid' | 'outline' | 'plain' ```
size  ```	'xs' | 'sm' | 'lg' | 'xl' ```
color  ```	'success' | 'danger' | 'warning' | 'success-outline' | 'danger-outline' | 'warning-outline' ```
radius ```	'rounded-none' | 'rounded-sm' | 'rounded-lg' | 'rounded-full' ```

