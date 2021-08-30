import { BrowserRouter, Switch,  Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./components/Beranda";
import ManajemenBuku from "./components/ManajemenBuku";
import { useEffect, useState } from "react";
import axios from "axios";
// import { response } from "express";
// import e from 'express';

function App(){
  function storeData(inputBook){
    console.log(inputBook);
   
  
    console.log(inputBook);
    alert("Data Berhasil ditambahkan")
    axios
      .post("http://localhost:4000/book/add", inputBook)
      .then((res) => {
        setBooks((prevBooks) => [...prevBooks, inputBook]);
        alert("Data berhasil ditambahkan !");
      })
      .catch((error) => {
        // console.log(error.response.data);
      });
  }
  function updateData(inputBook){
    axios
      .put("http://localhost:4000/book/update/" + inputBook._id, inputBook)
      .then((res) => {
        retrieveData();
        alert("Data berhasil diperbaharui !");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  function deleteData(book){
    axios
      .delete("http://localhost:4000/book/delete/" + book._id)
      .then(() => {
        retrieveData();
        alert("Data berhasil dihapus !");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  const [books, setBooks] = useState([]);

  useEffect(() => {
    retrieveData();
  }, []);

  function retrieveData() {
    axios
      .get("http://localhost:4000/book")
      .then((response) => {
        setBooks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Beranda />
          </Route>

          <Route path="/manajemen-buku">
            <ManajemenBuku  bookList={books} store={storeData} update={updateData} remove={deleteData}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
//kedua
// function App(){
//   return (
//     <div>
//       <Navbar />
//       <Beranda />
//     </div>
//   );
// }

// export default App
// pertama
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
