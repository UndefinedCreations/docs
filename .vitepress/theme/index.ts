import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import './theme.css'
import VersionSwitcher from "./components/VersionSwitcher.vue";
import Console from "./components/ArgumentParser.vue";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        enhanceAppWithTabs(app)
        app.component("VersionSwitcher", VersionSwitcher)
        app.component("ArgumentParser", Console);
    }
} satisfies Theme