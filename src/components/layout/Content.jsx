import { Route, Routes } from 'react-router-dom'
import './Content.css'
import Home from '../../views/examples/Home'
import UseState from '../../views/examples/UseState'
import UseEffect from '../../views/examples/UseEffect'
import UseRef from '../../views/examples/UseRef'
import UseMemo from '../../views/examples/UseMemo'
import UseCallback from '../../views/examples/UseCallback'
import UseContext from '../../views/examples/UseContext'
import UseReducer from '../../views/examples/UseReducer'
import NotFound from '../../views/examples/NotFound'


const Content = props => (

  <main className="Content">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/useState' element={<UseState />} />
      <Route path='/useEffect' element={<UseEffect />} />
      <Route path='/useRef' element={<UseRef />} />
      <Route path='/useMemo' element={<UseMemo />} />
      <Route path='/useCallback' element={<UseCallback />} />
      <Route path='/useContext' element={<UseContext />} />
      <Route path='/useReducer' element={<UseReducer />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </main>
)

export default Content
