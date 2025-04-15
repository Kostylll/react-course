import './App.css'
import FirstComponent from './components/FirstComponents'
import MyComponent from './components/MyComponent'
import TemplateExpression from './components/TemplateExpression'
import EventsComponent from './components/EventsComponent'
import Challenge from './components/Challenge'

function App() {


  return (
    <>
      <div>
        <h1>Hello World!</h1>
        <FirstComponent />
        <TemplateExpression />
        <MyComponent />
        <EventsComponent />
        <Challenge />
      </div>
    </>
  )
}

export default App
