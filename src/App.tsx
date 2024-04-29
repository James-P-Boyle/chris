

function App() {

  return (
    <section className="max-w-6xl mx-auto bg-white">
      <header className="p-1">
        <div className="max-w-screen-xl mx-auto xs:px-6 xs:py-12 lg:px-8">
        
          <div className="flex flex-col items-center gap-4 mx-auto xs:flex-row">

            <img
              alt=""
              src="./src/assets/chris.jpeg"
              className="object-cover w-40 h-40 rounded-full xs:w-56 xs:h-56"
            />              
            
            <div className="text-center">
              <p className="text-sm font-bold text-gray-900">Christopher Boyle</p>
              <h1 className="text-2xl font-bold text-gray-900 xs:text-3xl">Senior Business Analyst</h1>
              <p className="text-sm text-gray-500">Bridging IT and Business to Drive Efficiencies</p>
            </div>

          </div>
 
        </div>
      </header>
    </section>
  )
}

export default App
