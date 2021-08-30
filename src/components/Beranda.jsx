// function Beranda(){
//     return (
//         <div className="container mt-3 w-75">
//             <h1 className="text-center">Selamat datang di toko buku Camp404!</h1>
//             <div id="katalog"></div>
//         </div>
//     )
// }
import React from "react";
// import { useState } from "react";

function Beranda({ bookList }) {
    return(
    <div>
        <div className="container mt-3 w-75">
             <h1 className="text-center">Selamat datang di toko buku Camp404!</h1>
             <div id="katalog"></div>
        </div>
        <div id="kalatlogBuku" className="mt-5">
            <h2>Katalog Buku</h2>
            <hr />
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Judul</th>
                        <th>Pengarang</th>
                        <th>Harga</th>
                        <th>Stoookk</th>
                    </tr>
                </thead>


                {/* <tbody>
                        {bookList.map((book, index) => (
                            <tr key={index}>
                                <td> {index + 1} </td>
                                <td> {book.judul} </td>
                                <td> {book.pengarang} </td>
                                <td> {book.harga} </td>
                                <td> {book.stok} </td>

                            </tr>
                        ))}
                    </tbody> */}
            </table>
        </div>
    </div>
    );
}

export default Beranda;