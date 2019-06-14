/* global describe, it */
const translator = require('./translator')
const assert = require('assert')

describe('errorhandling of input', () => {
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
})

describe('translating individual formulas', () => {
  it('AVERAGE(B2:B3) becomes MEDEL(B2:B3)', async () => {
    const result = translator.translateFormula('AVERAGE(B2:B3)', 'SE')
    assert.strictEqual(result, 'MEDEL(B2:B3)')
  })
  it('handling separators - SUM(B2,B3) becomes SUMMA(B2;B3)', async () => {
    const result = translator.translateFormula('SUM(B2,B3)', 'SE')
    assert.strictEqual(result, 'SUMMA(B2;B3)')
  })
})

describe('translating nested formulas', () => {
  it('AVERAGE(AVERAGE(B2:B34)) becomes MEDEL(MEDEL(B2:B34))', async () => {
    const result = translator.translateFormula('AVERAGE(AVERAGE(B2:B34))', 'SE')
    assert.strictEqual(result, 'MEDEL(MEDEL(B2:B34))')
  })
  it('the advanced one', async () => {
    const input = '=IFERROR(INDEX($B$2:$B$9, MATCH(0,COUNTIF($D$1:D1, $B$2:$B$9), 0)),"")'
    const result = translator.translateFormula(input, 'SE')

    const expected = '=OMFEL(INDEX($B$2:$B$9; PASSA(0;ANTAL.OM($D$1:D1; $B$2:$B$9); 0));"")'
    assert.strictEqual(result, expected)
  })
})
