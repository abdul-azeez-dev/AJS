# AJS

## What is AJS?
It is a tiny js library for rendering reusable components just like Angular/React components.
Conditional rendering can also be done.

## Including component

Reusable component s can be rendered using `ajs-include` tag.

````html
<ajs-include src="components/test.html" name="test"></ajs-include>
````
## Conditional rendering

Conditional rendering  can be perfomed on HTML tags using `ajs-if` attribute.

```javascript
// JS
var username = "John";
```

````html
<!--HTML -->
 <span ajs-if="username == 'hello'">   success! </span>
````
