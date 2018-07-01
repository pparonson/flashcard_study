import hh from "hyperscript-helpers"
import {h, diff, patch} from "virtual-dom"
import createElement from "virtual-dom/create-element"

import {

} from "./update"

const {pre, div, h1} = hh(h)

function view(_model) {
  return div({className: "mw6 center"}, [
    h1({className: "f2 pv2 bb"}, "Flashcard Study App")
    , div({className: "flex"}, [])
    , pre( JSON.stringify(_model, null, 2) )
  ])
}

export default view
