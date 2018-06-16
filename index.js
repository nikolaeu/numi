#! /usr/bin/osascript -l JavaScript
const os = Application.currentApplication()
os.includeStandardAdditions = true
const se = Application('system events')

const alfred = Application('Alfred 3')
const numi = Application('Numi')
const port = 15055

run = input => {
  const curl = `curl -G --data-urlencode 'q=${input}' http://localhost:${port}`
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
