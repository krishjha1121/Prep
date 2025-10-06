import DefaultTheme from 'vitepress/theme'
import CodeTabs from './components/CodeTabs.vue'
// import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register global components
    app.component('CodeTabs', CodeTabs)
  }
}