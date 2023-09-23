import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import CafeItem from "./components/CafeItem";
import CafePost from "./components/CafePost";
import tattoos from "./data/tattoos";
import AppSearch from "./components/AppSearch";

  
function App() {
    const [selectedTattoo, setSelectedTattoo] = useState(null);
    const [searchText, setSearchText] = useState('');

    function onTattooOpenClick(thetattoo){
      setSelectedTattoo(thetattoo);
    }

    function onTattooCloseClick(){
      setSelectedTattoo(null);
    }

    const filteredTattoos = tattoos.filter((tattoo) =>{
        return tattoo.title.includes(searchText);
    });
    const tattooElements = tattoos.filter((tattoo) =>{
         return tattoo.title.includes(searchText);
    }).map((tattoo,index) =>{
        return <CafeItem key={index} tattoo={tattoo} onTattooClick={onTattooOpenClick} />;
    });

    let tattooPost = null;
    if(!!selectedTattoo) {
      tattooPost = <CafePost tattoo={selectedTattoo} onBgClick={onTattooCloseClick}/>
    }

  return (
    <div className="app">
     <AppHeader/>
     <AppSearch value={searchText} onValueChange={setSearchText} />
   
     <div className="app-grid">
        {tattooElements}
    </div>
    {tattooPost}
  </div>
  );
}

export default App; 
