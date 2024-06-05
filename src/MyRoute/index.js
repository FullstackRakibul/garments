import React,{Fragment} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage from '../pages/Home'
import AboutUsPages from '../pages/AboutUs'
import SustainabilityPages from '../pages/Sustainability'
import ContactPages from '../pages/Contact'
import ApparelPages from '../pages/Apparel'
import LaundryPages from '../pages/Laundry'
import FabricMillPages from '../pages/FabricMill'
import TrimAccessoriesPages from '../pages/Trim&Accessories'
import EmbroideryPages from '../pages/Embroidery'
import PrintingUnitPages from '../pages/PrintingUnit'
import TransportationUnitPages from '../pages/Transportation'
import PrintMediaPages from '../pages/PrintMedia'
import ElectronicsMediaPages from '../pages/ElectronicsMedia'
import TeaStatePages from '../pages/TeaState'
import NotFound from '../component/404'

const MyRoute=()=>{
    return(
        <Fragment>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutUsPages/>}/>
                <Route path='/sustainability' element={<SustainabilityPages/>}/>
                <Route path='/contact' element={<ContactPages/>}/>
                <Route path='/apparel' element={<ApparelPages/>}/>
                <Route path='/laundry' element={<LaundryPages/>}/>
                <Route path='/fabricmill' element={<FabricMillPages/>}/>
                <Route path='/trimaccessories' element={<TrimAccessoriesPages/>}/>
                <Route path='/embroidery' element={<EmbroideryPages/>}/>
                <Route path='/printingunit' element={<PrintingUnitPages/>}/>
                <Route path='/transportation' element={<TransportationUnitPages/>}/>
                <Route path='/printmedia' element={<PrintMediaPages/>}/>
                <Route path='/electronicsmedia' element={<ElectronicsMediaPages/>}/>
                <Route path='/teastate' element={<TeaStatePages/>}/>
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </Fragment>
    )
}
export default MyRoute;