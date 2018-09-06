/**
 * Docs
 * - https://code.visualstudio.com/docs/extensions/overview
 *
 * Examples
 * - https://code.visualstudio.com/docs/extensions/example-hello-world
 * - https://github.com/Microsoft/vscode-extension-samples
 *
 * Publishing
 * - https://code.visualstudio.com/docs/extensions/publish-extension
 */
const vscode = require('vscode') // eslint-disable-line

function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  console.log('"vs-code-extension-ns" is now active!') // eslint-disable-line

  // The command has been defined in the package.json file
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand('extension.sayHello', () => {
    const text = vscode.workspace.getConfiguration().get('vscodens.text')
    vscode.window.showInformationMessage(text)
  })

  context.subscriptions.push(disposable)
}
exports.activate = activate
