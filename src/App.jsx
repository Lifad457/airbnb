import React from "react"
import "./styles/App.css"
import Header from "./components/Header"
import About from "./components/About"
import Card from "./components/Card"
import datas from "./data"

function App() {
    const content = datas.map(item => 
        { return (
            <Card 
                coverImg={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
            )
        }
    )
    return (
        <div className="app--div">
            <Header />
            <About />
            {content}
        </div>
    )
  }

  export default App