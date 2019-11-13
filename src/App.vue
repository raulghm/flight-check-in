<template>
  <div id="app" class="App">
    <div class="App-body">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-size: 14px;
  /* font-family: var(--font-family-primary); */
  line-height: 1.2;
  background: var(--color-black) !important;
  color: var(--color-base);
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.App-body {
  padding: 2em;
  max-width: 560px;
  margin: 0 auto;
}

button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  -webkit-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
}

:focus {
  outline: 0;
}
</style>
