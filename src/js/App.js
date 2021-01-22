import React,{Component} from 'react';
import '../css/App.css'
import bjimg from '../imgs/BJ.png';

class App extends Component {
  render(){
    return (
      <div>
        <h1>Ryowu我是吳小毛</h1>
        <img src={bjimg} alt="Background" />
      </div>
    )
  }
}

export default App;