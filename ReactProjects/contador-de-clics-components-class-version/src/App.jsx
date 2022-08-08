import "./App.css";
import React from "react";
import myLogo from "./images/my-logo.png";
import Boton from "./components/Boton";
import Contador from "./components/Contador";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClicks: 0,
    };
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  handleClick = (tipo) => {
    console.log(`Clicked: ${tipo}`);
    if (tipo === "Click") {
      this.aumentarContador();
    } else if (tipo === "Reiniciar") {
      this.reiniciarContador();
    }
  };

  aumentarContador = () => {
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 }));
  };
  reiniciarContador() {
    this.setState({ numClicks: 0 });
  }

  render() {
    return (
      <div className="App">
        <div className="my-logo-container">
          <img src={myLogo} alt="Mi Logo" className="my-logo" />
        </div>
        <div className="container-principal">
          <Contador numClicks={this.state.numClicks} />
          <Boton
            texto={"Click"}
            isBtnClick={true}
            // handleClick={() => this.handleClick("Click")}
            handleClick={this.aumentarContador}
          />
          <Boton
            texto={"Reiniciar"}
            isBtnClick={false}
            // handleClick={() => this.handleClick("Reiniciar")}
            handleClick={this.reiniciarContador}
          />
        </div>
      </div>
    );
  }
}

// function App() {

//   const [numClicks, setNumClicks] = useState (0, );

// const handleClick = (tipo) => {
//   console.log(`Clicked: ${tipo}`);
//   if(tipo === "Click"){
//     aumentarContador();
//   }
//   else if(tipo === "Reiniciar"){
//     reiniciarContador();
//   }
// };

// const aumentarContador = () => {
//   setNumClicks(numClicks + 1);
// };
// const reiniciarContador = () => {
//   setNumClicks(0);
// };

//   return (
// <div className="App">
//   <div className="my-logo-container">
//     <img src={myLogo} alt="Mi Logo" className="my-logo" />
//   </div>
//   <div className="container-principal">
//     <Contador
//       numClicks={numClicks}
//     />
//     <Boton
//       texto={"Click"}
//       isBtnClick={true}
//       handleClick={()=> handleClick("Click")}
//     />
//     <Boton
//       texto={"Reiniciar"}
//       isBtnClick={false}
//       handleClick={()=> handleClick("Reiniciar")}
//     />
//   </div>
// </div>
//   );
// }

export default App;
