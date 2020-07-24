const jsdom = require('jsdom')
const { JSDOM } = jsdom
const dom = new JSDOM('<html><body></body></html>')

global.document = dom.window.document
global.window = dom.window
global.navigator = dom.window.navigator

const { Heading } = require('../src/index.js')

describe('Test block essential functionalities:', () => {
  const headingBlock = new Heading()

  const i18n = {
    locale: 'en-US',
    rtl: 'auto'
  }

  it('render() should return an node', () => {
    expect(headingBlock.render(i18n)).toHaveClass('freedom-editor-blocks')
  })

  it('render() should return an node with content, when passing in data', () => {
    const blockData = {
      type: headingBlock.constructor.name,
      data: {
        heading: 'Testing'
      }
    }

    const renderedBlock = headingBlock.render(i18n, blockData)

    expect(renderedBlock.querySelector('[contenteditable]').textContent).toContain(blockData.data.heading)
  })

  it('save() should return null when the block is empty', () => {
    const block = headingBlock.render(i18n)

    expect(headingBlock.save(block)).nothing()
  })

  it('save() should return JSON when the block is not empty', () => {
    const block = headingBlock.render(i18n)
    const textField = block.querySelector('[contenteditable]')
    textField.textContent = 'Testing'

    expect(headingBlock.save(block)).toBeTruthy()
  })
})
