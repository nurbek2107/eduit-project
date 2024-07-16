import { Navbar, Sidebar } from "@/components"

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className=''>
          App
        </main>
      </div>
    </>
  )
}

export default App