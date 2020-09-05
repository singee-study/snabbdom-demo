import {h, init} from "snabbdom";

const patch = init([]);

const vnode = h(
    "div#container", [
        h("h1", "This is title"),
        h("p", "This is p"),
    ]
)

const app = document.getElementById("app");

const oldVNode = patch(app, vnode);

setTimeout(()=>{
    const newVNode = h(
        "div#container", [
            h("h1", "This is a new title"),
            h("p", "This is p"),
        ]
    )

    patch(oldVNode, newVNode);
}, 2000);