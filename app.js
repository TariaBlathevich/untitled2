//create an object, and initializing the method .createApp(App)
//There are 2 types, when Vue works, import data from .html to .js and .js to .html


const App = {
    data(){
        return{
    counter: 0,
    appTitle: "Counter",
        }
    }
}

const app = Vue.createApp(App)
app.mount('#app')
// 2nd type Vue.createApp(App).mount('#app')