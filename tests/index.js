import assert from "assert"

import { formatHello } from "../build/debug.js"

assert.strictEqual(formatHello("JavaScript"), "Hello to JavaScript from AssemblyScript!")

console.log("Tests successfully finished.")
