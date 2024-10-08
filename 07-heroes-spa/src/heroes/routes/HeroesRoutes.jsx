import { Navbar } from '../../ui';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MarvelPage, DcPage, SearchPage, HeroPage } from '../pages';


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container">
        <Routes>
            <Route path="marvel" element= {<MarvelPage/>}/>
            
            <Route path="dc" element={<DcPage/>}/>

            <Route path="search" element={<SearchPage/>}/>

            <Route path="hero" element={<HeroPage/>}/>
            {/*seacrh, heroe by id}*/}

            <Route path="/" element={<Navigate to="marvel"/>}/>

        </Routes>
        </div>

        
    </>
  )
}
