# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./images/Screenshot%202023-01-07%20at%206.38.15%20PM.png)
![](./images/Screenshot%202023-01-07%20at%206.38.37%20PM.png)

### Links

- Solution URL: [My GitHub](https://github.com/VSandwar74/product-preview-card-component-main)
- Live Site URL: [My Live Site!](https://stellular-fox-3c8349.netlify.app/)

## My process

### Built with

- Vite
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JS

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

This was my first deep dive into JS and JavaScript integration with events and event handlers, etc.

```js
"change click".split(" ").forEach(function(e){
  keys.addEventListener(e, e => {
    let id = e.target.id
    if (id === "custom") {
      tip = Number(e.target.value)/100
    } else {
      tip = Number(id)
    }
    console.log(tip)
    output()
  })
});
```
```css
  .field input {
    all: unset;
    display: block;
    text-align: right;

    color: #00464A;
    background-color: #F3F8FB;
    font-size: 24px;
    outline: none;
    border: none;
    padding-right: 20px;
    width: 200px;
  }
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Mozilla Event Handlers](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers) - Mozilla was really helpful in understanding events and event handlers.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Frontend Mentor - [@VSandwar74](https://www.frontendmentor.io/profile/VSandwar74)

