// index.js
// 需 npm i vue --save
import Vue from "vue";
import App from "./App.vue";
import "./index.less";

(function() {
    function autoRootFontSize() {
        document.documentElement.style.fontSize =
            (Math.min(
                screen.width,
                document.documentElement.getBoundingClientRect().width
            ) /
                750) *
                32 +
            "px";
    }
    window.addEventListener("resize", autoRootFontSize);
    autoRootFontSize();
})();

new Vue({
    el: "#app",
    render: h => h(App)
});
