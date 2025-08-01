import { useState } from 'react'
import Index from './assets/Index';
import Upload from './assets/Upload';
import Notes from './assets/Notes';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('index')

  return (
    <>
      {currentView === 'index' && (
        <Index onGetStarted={() => setCurrentView('upload')} />
      )}
      {currentView === 'upload' && (
        <Upload onContinueToNotes={() => setCurrentView('notes')} />
      )}
      {currentView === 'notes' && (
        <Notes />
      )}
    </>
  )
}

export default App
