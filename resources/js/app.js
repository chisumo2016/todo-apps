import App from "./components/app";

require('./bootstrap');

import { createApp } from 'vue'

//Font Awesomme
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faPlusSquare, faTrash )

//Vue.component('font-awesome-icon', FontAwesomeIcon)


// createApp({
//     components: { App ,"font-awesome-icon" : FontAwesomeIcon}
// }).mount('#app')

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
