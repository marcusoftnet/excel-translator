<script>
  export let name;
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
        placeholder="=AVERAGE(B2:B34)" />
      <label class="control-label" for="toLanguage">Language</label>
      <select class="form-control form-control-lg" id="toLanguage">
        <option>Swedish</option>
      </select>
    </fieldset>
  </div>
</div>
