const db = require('../db/formulas.json')

const translateFormula = (inputFormula = '', language = '') => {
  if (inputFormula === '') {
    return '{ ERROR: No formula supplied }'
  }

  if (language === '') {
    return '{ ERROR: No language to translate into supplied }'
  }

  const languageData = db.languages.find(lang => lang.name === language)

  if (!languageData) {
    return `{ ERROR: '${language}' is not a language }`
  }

  let translatedFormula = inputFormula
  languageData.formulaNames.forEach(f => {
    translatedFormula = replaceAll(translatedFormula, f.key, f.value)
  })

  translatedFormula = translatedFormula.replace(',', languageData.separator)

  return translatedFormula
}

const replaceAll = (str, find, replace) => {
  return str.replace(new RegExp(find, 'g'), replace)
}

module.exports = {
  translateFormula
}
