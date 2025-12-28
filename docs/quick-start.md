# Quick Start

**Note**

1. **CSS will be require-d by HyperMD core lib**
2. If there are addons you don't need, you may disable them via *editor options*, see [Options-For-Addons][]
3. If you want to utilize **third-party libraries**, use [PowerPacks][]; HyperMD only requires CodeMirror



## with Vite / Webpack / Parcel

First of all, run `npm install hypermd codemirror`
and optional dependencies like `npm install katex marked`.

Now, create a simple `index.html`:

```html
<!DOCTYPE HTML>
<html>
  <head>
    <title>My Awesome Webpage</title>
  </head>
  <body>
    <textarea id="myTextarea"># Hello World</textarea>
    <script type="module" src="index.js"></script>
  </body>
</html>
```

And write your `index.js` (or `.ts`):

```js
import * as HyperMD from "hypermd"

// Import CSS files
import "hypermd/mode/hypermd.css"
import "hypermd/theme/hypermd-light.css"

// Load these modes if you want highlighting ...
import "codemirror/mode/htmlmixed/htmlmixed" // for embedded HTML
import "codemirror/mode/stex/stex" // for Math TeX Formula
import "codemirror/mode/yaml/yaml" // for Front Matters

// Load PowerPacks if you want to utilize 3rd-party libs
import "hypermd/powerpack/fold-math-with-katex" // implicitly requires "katex"
import "hypermd/powerpack/hover-with-marked" // implicitly requires "marked"

var myTextarea = document.getElementById("myTextarea")
var cm = HyperMD.fromTextArea(myTextarea, {
  /* optional editor options here */
  hmdModeLoader: false,
})
```

Start your bundler (e.g., `vite`) and you are good to go!



## convert existing CodeMirror markdown editor to HyperMD editor

If a markdown editor (based on CodeMirror ≥ 5.37.0) is already initialized and presented on page,
you can easily turn it into HyperMD markdown editor!

**Invoke `HyperMD.switchToHyperMD(editor);`** where `editor` is the CodeMirror editor instance.

> :warning: **Closure problem**, again...
>
> CodeMirror and HyperMD __must__ be loaded by the same method: either bundler, RequireJS or `<script>` tags.
> If not same, HyperMD might not work properly because it can't access the correct CodeMirror!
>
> Some components (eg. SimpleMDE, React-CodeMirror) use their __private__ CodeMirror build,
> which is __not supported__ by HyperMD. Further tweaking is required.
> [(example for react-codemirror)](https://github.com/laobubu/HyperMD/issues/26#issuecomment-391420190)

This will update editor options with `HyperMD.suggestedEditorConfig`.
If there are options you don't like, you may overwrite it, with the 2nd parameter of `switchToHyperMD`:

```js
// example: I want to keep "vim" keyMap
HyperMD.switchToHyperMD(editor, {
  keyMap: "vim"
})
```



[parcel-bundler]: https://parceljs.org/
[options-for-addons]: ./options-for-addons.md
[PowerPacks]: ./powerpacks.md
