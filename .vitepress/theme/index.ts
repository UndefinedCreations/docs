import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import './theme.css'
import VersionSwitcher from "./components/VersionSwitcher.vue";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        enhanceAppWithTabs(app)
        app.component("VersionSwitcher", VersionSwitcher)
    }
} satisfies Theme