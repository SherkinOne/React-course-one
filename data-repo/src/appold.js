
import "./App.css";


import Header from "./template/header";
import Footer from "./template/footer";
import searchImg from "./mag.png"
// var express = require('express')


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className="indexBody flex items-center flex-wrap mb-20">
        
        <section className="container mx-auto px-6 p-10">

          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Collecting data is important, but finding datasets can be time consuming.
          </h2>
        

          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 justify-center ">
            <img className="mx-auto" src={searchImg} alt="Magnify glass" />

            </div>
            <div className="w-full md:w-1/2 pl-10">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">
                Searching 
              </h4>
              <p className="text-gray-600 mb-8">
                Search the database of links to datasets by category, type, country etc.
              </p>
            </div>
          </div>

         
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">
                Adding
              </h4>
              <p className="text-gray-600 mb-8">
                Add new link to dataset
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img className="mx-auto" src={searchImg} alt="Magnify glass" />
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
    
  
  );
}

export default App;
