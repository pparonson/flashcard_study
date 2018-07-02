import hh from "hyperscript-helpers"
import {h, diff, patch} from "virtual-dom"
import createElement from "virtual-dom/create-element"

import {
  showFormMsg
} from "./update"

const {pre, div, h1, button, form} = hh(h)

function formView(_dispatch, _model) {
  const {showForm} = _model
  if (showForm) {
    return form(
      {
        className: "br2 b--solid mh2 mv3 bg-yellow"
        // , onsubmit: e => {
        //   // prevent default form http post request
        //   e.preventDefault();
        //   //_dispatch(saveMealMsg);
      }
      , [
        div({className: "w-100 h-100"})
      ])
  }
  return button(
    {
      className: "f3 pv2 ph3 bg-blue white bn"
      // onclick: show the form
      , onclick: () => _dispatch(showFormMsg(true))
    }
    , "Add Flashcard"



  )
}

function view(_dispatch, _model) {
  return div({className: "mw8"}, [
    h1({className: "f2 pv2 bb"}, "Flashcard Study")
    , div({className: "flex"}, [
      formView(_dispatch, _model)
    ])
    , pre( JSON.stringify(_model, null, 2) )
  ])
}


export default view
