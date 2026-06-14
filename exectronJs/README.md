# Electron BrowserWindow Notes

## 1. Importing Electron Modules

```javascript
const { app, BrowserWindow } = require("electron");
```

### Explanation

We are importing two important modules from the Electron package:

### `app`

* `app` is the main controller of the Electron application.
* It manages the complete application lifecycle.
* It tells us when the Electron application is ready.

Example:

```javascript
app.whenReady();
```

Meaning: "When the Electron application has finished initializing, execute the next task."

---

### `BrowserWindow`

* `BrowserWindow` is used to create a native desktop window.
* Inside this window, Electron runs the Chromium browser engine, which renders HTML, CSS, and JavaScript.

---

# 2. Creating a Window Function

```javascript
function createWindow() {

}
```

This is a custom function whose responsibility is to create the main application window.

---

# 3. Creating a BrowserWindow

```javascript
const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true
    }
});
```

## `width: 800`

* Defines the horizontal size of the application window.
* The unit is pixels.

Example:

```
800px
```

---

## `height: 600`

* Defines the vertical size of the application window.
* The unit is pixels.

Example:

```
600px
```

---

## `webPreferences`

`webPreferences` controls the behavior and settings of the web page running inside the BrowserWindow.

---

## `nodeIntegration: true`

It allows the renderer process (HTML page) to access Node.js APIs.

Example:

```javascript
const fs = require("fs");
```

This will work inside the renderer JavaScript only when `nodeIntegration` is enabled.

### Security Note

In production applications, developers generally use:

```javascript
nodeIntegration: false
```

and expose only specific APIs using a `preload.js` file.

---

# 4. Removing the Default Menu Bar

```javascript
win.setMenu(null);
```

### What does it do?

On Windows, Electron automatically creates a default application menu:

```
File | Edit | View | Window | Help
```

`setMenu(null)` removes this menu completely.

---

## Alternative Method

```javascript
autoHideMenuBar: true
```

### Difference

* `setMenu(null)` → Completely removes the menu.
* `autoHideMenuBar: true` → Hides the menu, but it can appear again when the user presses the `Alt` key.

---

# 5. Loading an HTML File

```javascript
win.loadFile("index.html");
```

This loads a local HTML file into the BrowserWindow.

### Execution Flow

```
main.js
   |
   v
BrowserWindow
   |
   v
Chromium Engine
   |
   v
index.html + CSS + JavaScript
```

---

# 6. Starting the Application

```javascript
app.whenReady().then(createWindow);
```

### How it works

1. The Electron application starts.
2. Electron initializes its internal resources.
3. The `whenReady()` promise is resolved.
4. The `createWindow()` function is executed.
5. A desktop window appears on the screen.

---

# Complete Application Execution Flow

```
npm start
    |
    v
electron .
    |
    v
package.json
(main: main.js)
    |
    v
main.js executes
    |
    v
app.whenReady()
    |
    v
createWindow()
    |
    v
new BrowserWindow()
    |
    v
loadFile("index.html")
    |
    v
Desktop Application Window
```

---

# Important Concepts

## Main Process

* It is the backend side of an Electron application.
* It has access to operating system APIs.
* It creates and manages BrowserWindows.
* It runs inside `main.js`.

---

## Renderer Process

* It is the frontend side running inside a BrowserWindow.
* It renders HTML, CSS, and JavaScript.
* Every BrowserWindow has its own separate renderer process.

---

# Project Structure

```
project/
│
├── main.js        → Main Process
├── index.html     → User Interface
├── package.json   → Project Configuration
└── node_modules   → Installed Packages
```

---

# Summary

Electron is a combination of:

```
Electron
   |
   |-- Chromium (renders the user interface)
   |
   |-- Node.js (provides backend capabilities)
```

Because of this combination, Electron allows developers to build cross-platform desktop applications for Windows, Linux, and macOS using HTML, CSS, and JavaScript.
