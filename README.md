# Job Tracker - JavaScript Concepts

This document explains several key JavaScript and DOM concepts used in the development of the Job Application Tracker.

---

### 1. Difference between Selectors: `getElementById`, `getElementsByClassName`, and `querySelector`/`querySelectorAll`

- **`getElementById('id')`**: Returns a **single** element matching the unique ID. It is very fast and efficient.
- **`getElementsByClassName('class')`**: Returns an **HTMLCollection** (array-like object) of all elements with that class. It updates automatically if the DOM changes.
- **`querySelector('selector')`**: Uses CSS selector syntax to find the **first** matching element (e.g., `#my-id` or `.my-class > div`). Very flexible.
- **`querySelectorAll('selector')`**: Like `querySelector`, but returns a **static NodeList** containing all matching elements.

### 2. How to Create and Insert a New Element into the DOM

To add an element dynamically, We have to follow the following steps:
1.  **Create**: `const newDiv = document.createElement('div');`
2.  **Insert**: Add it to an existing parent: `parent.appendChild(newDiv);`

### 3. What is Event Bubbling?
Event Bubbling is the process where an event starts from the **target element** (the one you clicked) and then "bubbles up" through its parent elements until it reaches the `window`.

**How it works:**
1.  Click a button inside a `<div>`.
2.  The `click` event fires on the button first.
3.  Then it fires on the `<div>`, then the `<body>`, then the `<html>`, and so on.

### 4. What is Event Delegation?
Event Delegation is a technique where you add a single event listener to a **parent** element instead of adding listeners to every single **child** element.

**Why it's useful:**
- **Dynamic Elements**: If you add new items (like job cards) to a list, they will automatically work without needing new listeners attached.
- **Performance**: Handling one listener on the parent is more memory-efficient than handling hundreds of listeners on children.

### 5. Difference between `preventDefault()` and `stopPropagation()`

- **`preventDefault()`**: Prevents the **default behavior** of the browser (e.g., stops a link from navigating or a form from submitting). The event still continues to bubble up.
- **`stopPropagation()`**: Stops the event from **bubbling up** to parent elements. The default behavior still happens (if not prevented), but parent handlers won't see the event.
