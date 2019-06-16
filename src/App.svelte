<script>
  import { translateFormula } from "./lib/translator.js";
  let inputFormula = "=SUM(B2:B34)";
  let inputLangauge = "SE";
  $: translatedFormula = translateFormula(inputFormula, inputLangauge);
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<div class="jumbotron">
  <h1 class="display-3">Excel formula translator</h1>
  <p class="lead">
    Paste your formula below and translate it into formulas for your langauge
  </p>
</div>
<div class="jumbotron">
  <div class="form-group">
    <fieldset>
      <label class="control-label" for="inputFormula">Input formula</label>
      <input
        class="form-control form-control-lg"
        id="inputFormula"
        type="text"
        bind:value={inputFormula} />
      <label class="control-label" for="toLanguage">Language</label>
      <select
        bind:value={inputLangauge}
        class="form-control form-control-lg"
        id="toLanguage">
        <option value="SE">Swedish</option>
        <option value="FI">Finnish</option>
      </select>
    </fieldset>
    <div class="form-group">
      <fieldset>
        <label class="control-label" for="translated">Translated formula</label>
        <input
          class="form-control form-control-lg"
          id="translated"
          type="text"
          bind:value={translatedFormula}
          readonly="" />
      </fieldset>
    </div>

  </div>
</div>
