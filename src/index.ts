import { App } from 'vue'
import HelloWorldOptionsAPI from './components/HelloWorldOptionsAPI.vue'

function install(app: App) {
  app.component('HelloWorldComponent', HelloWorldOptionsAPI)
}

export default { install }

export { HelloWorldOptionsAPI }
