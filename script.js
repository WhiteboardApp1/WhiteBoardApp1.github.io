document.getElementById('myInput').addEventListener('input', function() {
    this.style.fontSize = '5vh';
    this.style.width = 'auto';
    this.style.height = 'auto';
    this.style.width = (this.scrollWidth + 10) + 'px'; // Add 10px for padding
    this.style.height = (this.scrollHeight + 10) + 'px'; // Add 10px for padding
  });
  