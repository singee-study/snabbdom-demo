import { h, init } from "snabbdom";
import style from "snabbdom/modules/style";
import eventlisteners from "snabbdom/modules/eventlisteners";

const patch = init([style, eventlisteners]);

const vnode = h('div#container', {
    style: {
        backgroundColor: "red",
    },
    on: {
        click() {
            console.log("I'm clicked.")
        }
    }
}, [
    h("h1", "Hello world!"),
    h("p", "Hello p!"),
]);

const app = document.getElementById("app");
patch(app, vnode);