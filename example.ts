import * as HyperMD from './src/everything'
import './mode/hypermd.scss'
import './theme/hypermd-light.scss'

// Import PowerPacks if needed (they auto-register)
import './src/powerpack/fold-math-with-katex'
import './src/powerpack/fold-emoji-with-emojione'

const textarea = document.getElementById('myTextarea') as HTMLTextAreaElement
const editor = HyperMD.fromTextArea(textarea, {
  hmdModeLoader: false, // We are bundling everything, so no need for mode loader
})

editor.setSize("100%", "100%")
editor.focus()
