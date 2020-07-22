import {
  getSavedData
} from './utilities/helper.js'

import {
  asStatic,
  asParams,
  asTag
} from 'static-params'

import {
  render,
  html,
  svg
} from 'lighterhtml'

class Heading {
  constructor (customOptions) {
    const defaultOptions = {
      i18n: {
        locale: 'en-US',
        rtl: 'ltr',
        translations: {

        }
      },
      controllers: [

      ],
      defaultHeadingLevel: 'h1'
    }

    this.options = {
      ...defaultOptions,
      ...customOptions
    }
  }

  render (i18n, savedData, headingLevel) {
    const shtml = asTag(html.node)
    const headingTag = (headingLevel) ? asStatic(headingLevel) : asStatic(this.options.defaultHeadingLevel)
    const textDirection = (i18n.rtl !== undefined) ? i18n.rtl : this.options.i18n.rtl

    return shtml`<div class="freedom-editor-blocks ${this.constructor.name}-block" data-block-type="${this.constructor.name}">
    <${headingTag} class="heading-field" contenteditable dir="${textDirection}">${getSavedData(savedData)}</${headingTag}>
    </div>`
  }

  save (block) {
    const editableField = block.querySelector('.heading-field')
    if (editableField.textContent === '') {
      return
    }
    return {
      type: this.constructor.name,
      data: {
        heading: editableField.textContent
      }
    }
  }
}

export {
  Heading
}
