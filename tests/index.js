import assert from "assert"

import { formatHello } from "../build/debug.js"

assert.strictEqual(formatHello("World"), "Hello, World!")

console.log("Tests successfully finished.")
