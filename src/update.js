import * as R from "ramda"

const MSGS = {
  SHOW_FORM: "SHOW_FORM"

}

export function showFormMsg(_msg) {
  return {
    type: MSGS.SHOW_FORM
    , showForm: _msg
  }
}

function update(_msg, _model) {
  if (_msg.type === "SHOW_FORM") {
    return {
      ..._model
      , showForm: _msg.showForm
    }
  }
}

export default update
