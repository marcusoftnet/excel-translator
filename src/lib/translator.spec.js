/* global describe, it */
const translator = require('./translator')
const assert = require('assert')

describe('translating individual formulas', () => {
  it.skip('AVERAGE(B2:B3) becomes MEDEL(B2:B3)', async () => {
    const result = translator.translateFormula('AVERAGE', 'SE')
    assert.strictEqual(result, 'MEDEL(B2:B3)')
  })

  it('returns error if no formula is supplied', async () => {
    const result = translator.translateFormula('', 'SE')
    assert.strictEqual(result, `{ ERROR: No formula supplied }`)
  })

  it('returns error if no language is supplied', async () => {
    const result = translator.translateFormula('AVERAGE', '')
    assert.strictEqual(result, '{ ERROR: No language to translate into supplied }')
  })

  it('returns error if language is not found', async () => {
    const result = translator.translateFormula('AVERAGE', 'NOT FOUND')
    assert.strictEqual(result, `{ ERROR: 'NOT FOUND' is not a language }`)
  })

  it('returns error if formula is not found', async () => {
    const result = translator.translateFormula('MARCUS', 'SE')
    assert.strictEqual(result, `{ ERROR: 'MARCUS' is not a formula }`)
  })
})
