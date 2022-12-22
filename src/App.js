import Fullname from './components/Fullname.js'
import Address from './components/Address.js'
import Photoprofile from './components/Photoprofile.js'
import './app.css'


function App() {
  return (
    <form style= {{textAlign:'center', width:'300px', margin:'0 auto', marginTop:'150px', gap:'100px' }}>
    <div className="App">
      <Photoprofile>
        <img src='./photo1.jpg' alt ='pho' width='300px'  ></img>
      </Photoprofile>
      <Fullname name = {'ACHREF MABROUK'} />
      <Address address={'BARDO , TUNIS'} />
    </div>
    </form>
  );
}

export default App;
