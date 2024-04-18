function generateEmbed() {
  var driveLink = document.getElementById('driveLink').value;
  var fileId = extractFileId(driveLink);

  if (fileId) {
    var embedCode = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Embedded Google Drive Video</title>
<style>
  .ytp-cued-thumbnail-overlay, .ytp-watermark {
    display: none !important;
  }
</style>
</head>
<body>

<!-- Placeholder div for the video player -->
<div style="width: 100%; height: 100%; position: relative;">
<iframe src="https://drive.google.com/file/d/${fileId}/preview" width="100%" height="100%" frameborder="0" scrolling="no" seamless=""></iframe>
<div style="width: 80px; height: 80px; position: absolute; opacity: 0; right: 0px; top: 0px;">&nbsp;</div>
</div>

</body>
</html>`;
    document.getElementById('embedCode').innerText = embedCode;
    document.getElementById('preview').innerHTML = embedCode;
  } else {
    alert('Invalid Google Drive link!');
  }
}

function extractFileId(driveLink) {
  var match = /\/file\/d\/([^/]+)/.exec(driveLink);
  return match ? match[1] : null;
}

function copyEmbedCode() {
  var embedCode = document.getElementById('embedCode').innerText;

  if (embedCode.trim() !== "") {
    var range = document.createRange();
    var embedCodeElement = document.getElementById('embedCode');
    range.selectNode(embedCodeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Embed code copied to clipboard!');
  } else {
    alert('Please generate embed code first!');
  }
}