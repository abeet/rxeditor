import {RXElement} from "../../rxelement"
import {HTMLSpan} from "../../html/html-span"

export class BSCloseButton extends RXElement{
  constructor() {
    super()
    this.toolboxInfo.groupId = 'groupComponents'
    this.toolboxInfo.elementId = 'bsCloseButton'
    this.toolboxInfo.elementName = "Close Button"
    this.className = 'BSCloseButton'

    this.editMarginStyle.padding = ''
    //this.editMarginStyle = {}

    this.groups.alertOptions = {
      label:'CloseButton Options'
    }
    this.$meta.tag = 'button'
    this.$meta.innerHTML = '<span aria-hidden="true">&times;</span>'
    this.label = "close"
    this.acceptedChildren=[]

  }

  make(){
    return new BSCloseButton
  }

  metaToModel(model){
    model.classList.push('close')
    model.attributes['type'] = 'button'
    model.attributes['data-dismiss'] = 'alert'
    model.attributes['aria-label'] = 'close'
  }

}