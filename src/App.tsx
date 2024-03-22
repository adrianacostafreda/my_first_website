import Nav from "@/scenes/nav"
import Overview from "@/scenes/overview"
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Overview);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  
  useEffect(() => {
    const handleScroll = () =>{
      if (window.scrollY === 0) {
        /*If we are not at top of the page*/
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Overview)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (<div className="app bg-gray-20">
    <Nav 
      isTopOfPage={isTopOfPage}
      selectedPage = {selectedPage} setSelectedPage = {setSelectedPage} 
    />
    <Overview setSelectedPage={setSelectedPage}

    />
  </div>
  );
}

export default App;
