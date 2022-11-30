# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Links

- Solution URL: [Solution](https://github.com/RicardoFuentes437/ping-coming-soon-page-master)
- Live Site URL: [Live Site](https://ricardofuentes437.github.io/ping-coming-soon-page-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- Bootstrap

### What I learned

I learned how to fill an element with text using JavaScript, this was very helpful because there was a part of the challenge where you need to show a message but the message is different depending on if the email submitted was formatted in a wrong way or if there wasn't any email submitted at all, this is the code i wrote for that part

```js
if(input.value == ''){
            errorMessage.innerHTML = 'Whoops! It looks like you forgot to add your email';
        }else{
            errorMessage.innerHTML = 'Please provide a valid email address';
        }
```
"errorMessage" was previously defined.

### Continued development

I know JavaScript is a very wide coding language, there are a lot of different things that you can do with it and so far i've only used it for simple things, so i would really like to learn more about it and the things i can build with it.

### Useful resources

- [Insert text into an element](https://stackoverflow.com/questions/28600453/add-text-to-a-p-tag-by-using-the-id-of-the-body-tag-in-javascript) - This helped me to insert a message into a p element and change it depending on the value submitted from the form.

## Author

- Github - [RicardoFuentes437](https://github.com/RicardoFuentes437)
- Frontend Mentor - [@RicardoFuentes437](https://www.frontendmentor.io/profile/RicardoFuentes437)
