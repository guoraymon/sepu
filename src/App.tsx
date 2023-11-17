import { For } from 'solid-js'
import './App.css'
import colors from './assets/colors.json'

function App() {
  return (
    <>
      <div class="list">
        <For each={colors}>
          {color => (
            <div class="item" style={{ "background-color": color.hex }}>
              <span>{color.name}</span>
              <span>{color.hex}</span>
            </div>
          )}
        </For>
      </div>
      <div>

      </div>
    </>
  )
}

export default App
