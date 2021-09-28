import { printf, toConsole } from "./.fable/fable-library.3.3.1/String.js";

export function hello(name) {
    toConsole(printf("Hello %s"))(name);
}

hello("Happypig");

export const target = document.body;

export const el = document.createElement("div");

el.innerText = "I come from F#!";

target.appendChild(el);

