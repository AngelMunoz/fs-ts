﻿module Main

open Browser.Types
open Browser.Dom
open Fable.Core

let hello name =
    printfn "Hello %s" name

hello "Happypig"

let target = document.body
let el = document.createElement("div")
el.innerText <- "I come from F#!"
target.appendChild(el)