document.addEventListener('DOMContentLoaded', function() {
    var saveButton = document.getElementById('saveButton');
    var textArea = document.getElementById('textArea');
  
    chrome.storage.sync.get('text', function(data) {
      textArea.value = data.text;
    });
  
    saveButton.addEventListener('click', function() {
      var text = textArea.value;
      chrome.storage.sync.set({'text': text}, function() {
        console.log('Text wurde gespeichert.');
      });
    });
  });