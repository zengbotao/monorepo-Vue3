import { App } from 'vue'
import Demo from './Demo.vue'

export {Demo}
export default{
    install(app:App){
        app.component('Demo',Demo)
    }
}
// pnpm add @types/node vite-plugin-dts -D