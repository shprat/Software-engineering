function goToSettings() {
  window.location.href = '../src/pages/Settings/settings.html'
}

function goToTests() {
  window.location.href = '../src/test/test.html'
}


function render() {
  const app = document.getElementById('app')
  app.innerHTML = `
    <h1>Welcome to Bug World!</h1>
    <button onclick="goToSettings()">Start</button>
    <button onclick="goToTests()">Tests</button>
  `;
}

render();