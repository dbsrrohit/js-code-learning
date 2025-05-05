# Projects Related to DOM
## Project Link
[Poject 1 Click here](https://stackblitz.com/edit/stackblitz-starters-79bp6dgt?description=Starter%20project%20for%20Node.js,%20a%20JavaScript%20runtime%20built%20on%20Chrome%27s%20V8%20JavaScript%20engine&file=index.js&title=node.new%20Starter)

# Solution Code

## Project 1

```javascript
console.log("Hello World!")
```
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


