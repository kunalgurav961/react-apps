# Set Up Taiwindcss

1. create a react app
2. install tailwindcss
    ```bash
        npm i tailwindcss @tailwindcss/vite
    ```
3. import tailwindcss in index.css
4. vite.config.js, call the tailwindcss in vite.config.js
```js
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```