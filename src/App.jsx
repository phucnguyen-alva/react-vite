import { useState } from 'react'
import './App.css'
import alvaLogo from './assets/logo.gif' // 👈 your custom GIF

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={alvaLogo} className="logo" alt="Alva's Logo" />
      </div>
      <h1>👋 Hey, I'm Alva!</h1>
      <div className="card">
        <p>
          I'm a creative technologist-in-training with a passion for design, storytelling, and turning code into meaning.
        </p>
        <p>
          When I’m not building cool stuff or strategizing campaigns, you’ll find me dancing (hip hop + contemporary), thinking in two languages, and connecting with humans around the world.
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          You’ve clicked {count} {count === 1 ? 'time' : 'times'}!
        </button>
      </div>
      <p className="read-the-docs">
        This site is powered by vibes, curiosity, and way too much coffee ☕
      </p>
    </>
  )
}

export default App
