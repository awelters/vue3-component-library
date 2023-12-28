import { App } from 'vue'
import HelloWorldOptionsAPI from './components/HelloWorldOptionsAPI.vue'

function install(app: App) {
  app.component('HelloWorldOptionsAPI', HelloWorldOptionsAPI)
}

export default { install }

export { HelloWorldOptionsAPI }
