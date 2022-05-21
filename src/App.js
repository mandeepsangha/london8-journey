
import './App.css';
import Header from './Header';
import HtmlCss from './HtmlCss';
import JavaScript from './JavaScript';
import ReactCard from './React';
import NodeCard from './Node';
import Form from './Form';

function App() {
  return (
    
    <div className="App">

      <Header/>
      <div className="modules">
      <HtmlCss/>
      <JavaScript/>
      <ReactCard/>
      <NodeCard/>
      </div>
      <Form/>
    </div>
  );
}

export default App;
