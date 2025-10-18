// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import CodeTabs from "./components/CodeTabs.vue";
import ElectricCard from "./components/ElectricCard.vue";
import "./custom.css";

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.component("CodeTabs", CodeTabs);
		app.component("ElectricCard", ElectricCard);
	},
};
