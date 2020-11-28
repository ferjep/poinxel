import hotkeys from 'hotkeys-js'
import { getIcon } from '../../../scripts/getIcon'

export class Controller {
  constructor(
    public name: string,
    public element: HTMLElement,
    public action: Function,
    public shortcut: string
  ) {
    this.element.setAttribute('name', this.name)

    const hoverText = document.createElement('div')
    hoverText.classList.add('icon-text')
    hoverText.textContent = `${this.name} (${this.shortcut})`

    this.element.appendChild(hoverText)

    hotkeys(shortcut, e => {
      e.preventDefault()
      this.action()
    })
  }

  static createElement(iconData: string, inlineIcon = false) {
    const element = document.createElement('button')
    element.classList.add('icon', 'controller')
    element.appendChild(getIcon(iconData, inlineIcon))
    return element
  }
}