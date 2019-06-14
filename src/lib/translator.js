const db = require('../db/formulas.json')

const translateFormula = (formula = '', language = '') => {
  if (formula === '') {
    return '{ ERROR: No formula supplied }'
  }

  if (language === '') {
    return '{ ERROR: No language to translate into supplied }'
  }

  const languageData = db.languages.find(lang => lang.name === language)

  if (!languageData) {
    return `{ ERROR: '${language}' is not a language }`
  }

  const translated = languageData.formulas.find((f) => f.key === formula)

  if (!translated) {
    return `{ ERROR: '${formula}' is not a formula }`
  }

  return 'MEDEL'
}

module.exports = {
  translateFormula
}
