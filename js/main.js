import routes from './routes.js';

export const store = Vue.reactive({
    dark: JSON.parse(localStorage.getItem('dark')) || false,
    toggleDark() {
        this.dark = !this.dark;
        localStorage.setItem('dark', JSON.stringify(this.dark));
    },
});

const app = Vue.createApp({
    data: () => ({ store }),
});
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

app.use(router);

app.mount('#app');
data() {
    return {
        showColorMenu: false,

        themeColor: "#77DD77",

        presetColors: [
            "#ff3b30",
            "#ff9500",
            "#ffcc00",
            "#34c759",
            "#007aff",
            "#5856d6",
            "#af52de",
            "#ff2d55",
            "#ffffff",
            "#000000"
        ]
    };
},
methods: {
    updateThemeColor() {
        document.documentElement.style.setProperty(
            "--color-primary",
            this.themeColor
        );

        localStorage.setItem(
            "themeColor",
            this.themeColor
        );
    },

    setThemeColor(color) {
        this.themeColor = color;
        this.updateThemeColor();
    }
},
mounted() {
    const savedColor =
        localStorage.getItem("themeColor");

    if (savedColor) {
        this.themeColor = savedColor;

        document.documentElement.style.setProperty(
            "--color-primary",
            savedColor
        );
    }
}
