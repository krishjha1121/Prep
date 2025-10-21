import DefaultTheme from "vitepress/theme";
import CodeTabs from "./components/CodeTabs.vue";
import ElectricCard from "./components/ElectricCard.vue";
import PDFViewer from "./components/PDFViewer.vue";
import ProblemTable from "./components/ProblemTable.vue";
import "./custom.css";

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.component("CodeTabs", CodeTabs);
		app.component("ElectricCard", ElectricCard);
		app.component("PDFViewer", PDFViewer);
		app.component("ProblemTable", ProblemTable);
	},
};
