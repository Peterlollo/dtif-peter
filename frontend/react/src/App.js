import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import axios from 'axios';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   componentWillMount() {
//     // Here is a link to the API Documentation: https://dev.socrata.com/
//     axios.get('https://data.austintexas.gov/resource/h8x4-nvyi.json')
//       .then((res) => {
//         console.log(res);
//         // TODO: Decided how to store the response data.
//       })
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <h2>Dangerous Dogs</h2>
//         </div>

//         <p className="App-intro">
//           {/* TODO: Delete line below */}
//           Open Dev Tools Console to see data.
//           {/* TODO: Display data here, maybe? Be creative! 🎉 */}
//         </p>
//         <div>
//           {/* <header>
//             <Link to="/">Home</Link>
//             <Link to="/about-us">About</Link>
//           </header> */}

//           <main>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/about-us" component={About} />
//           </main>
//         </div>
//       </div>
//     );
//   }
// }

export default App;