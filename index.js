// Your code goes here

document.addEventListener('DOMContentLoaded', function() {
  const paragraph = document.getElementById('text');
  paragraph.textContent = 'This is really cool!';
});

expect(document.querySelector('p').textContent).to.equal("This is really cool!");