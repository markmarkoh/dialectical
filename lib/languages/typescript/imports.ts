// Dynamic import (async)
async function loadModule() {
  const module = await import("./dynamicModule")
  module.doSomething()
}

