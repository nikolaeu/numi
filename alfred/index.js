#! /usr/bin/osascript -l JavaScript
const os = Application.currentApplication()
os.includeStandardAdditions = true
const se = Application('system events')

let alfred = null
const numi = Application('Numi')
const port = 15055

try {
  alfred = Application('Alfred 3')
} catch (error) {}

try {
  alfred = Application('com.runningwithcrayons.Alfred')
} catch (error) {}

run = input => {
  const query = encodeURIComponent(input)
  const curl = `curl --get 'http://localhost:${port}?q=${query}'`

  let result
  try { result = os.doShellScript(curl) }
  catch ({message}) {
    if (message.includes('Failed to connect') && !numi.running()) {
      numi.activate()
      delay(.25)
      se.processes.byName('Numi').visible = false

      alfred.runTrigger('numi', {
        inWorkflow: 'com.nikolaeu.numi',
        withArgument: input
      })
    }
  }

  const workings = `${input} = ${result}`
  items = [{
    title: result,
    arg: result,
    text: { copy: workings, largetype: workings },
    mods: {
      cmd: { subtitle: workings, arg: workings },
      alt: { arg: input.toString() }
    }
  }]
  return JSON.stringify({items})
}
