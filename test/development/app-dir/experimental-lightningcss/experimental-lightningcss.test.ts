import { nextTestSetup } from 'e2e-utils'

describe('experimental-lightningcss', () => {
  const { next } = nextTestSetup({
    files: __dirname,
    dependencies: ['lightningcss@^1'],
  })

  it('should support css modules', async () => {
    // Recommended for tests that check HTML. Cheerio is a HTML parser that has a jQuery like API.
    const $ = await next.render$('/')
    expect($('p').text()).toBe('hello world')
    // swc_css does not include `-module` in the class name, while lightningcss does.
    expect($('p').attr('class')).toBe('style-module__hlQ3RG__blue')
  })
})
