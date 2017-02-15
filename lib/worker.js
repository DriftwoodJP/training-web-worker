self.addEventListener('message', function(event) {
  var count = 0;
  for (var i = 1, len = event.data.target; i <= len; i++) {
    if (i % event.data.x === 0) {
      count++;
    }
  }
  postMessage(count);
});
