'use strict';

require('babel-polyfill');

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    let worker = new Worker('lib/worker.js');

    worker.postMessage({
      'target': document.getElementById('target').value,
      'x': document.getElementById('x').value,
    });
    document.getElementById('result').textContent = '計算中...';

    worker.addEventListener('message', function(event) {
      document.getElementById('result').textContent = event.data;
    }, false);

    worker.addEventListener('error', function(event) {
      document.getElementById('result').textContent = event.message;
    }, false);
  }, false);
}, false);
