import Nav from "@/scenes/nav"
import Overview from "@/scenes/overview"
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types"
import { UserProps } from "./types";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Repositories);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  
  const [user, setUser] = useState<UserProps | null>(null)

  function setUserData (user: UserProps | null): void {
    setUser(user)
  }
  
  useEffect(() => {
    const handleScroll = () =>{
      if (window.scrollY === 0) {
        /*If we are not at top of the page*/
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Repositories)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (<div className="app">
    <Nav 
      isTopOfPage={isTopOfPage}
      selectedPage = {selectedPage} setSelectedPage = {setSelectedPage} 
    />
    <Overview
      setUser={setUserData}
    />

  </div>
  );
}

export default App;
