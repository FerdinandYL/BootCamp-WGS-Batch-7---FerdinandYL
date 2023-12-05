// import React from "react";
// import { createPortal } from "react-dom";
// import ModalForm from "./ModalForm";

// export default function Car(){

//     // State : kondisi apakah sedang mengedit
//     const [isEditing, setEditing] = React.useState(null);

//     // State : kondisi modal saat ini
//     const [modalState, setModalState] = React.useState(false);
    
//     // State : menyimpan daftar mobil
//     const [carList, setCarList] = React.useState([
//         {
//             model:'pog', 
//             type:'set0', 
//             color:'qwerty'
//         },
//         {
//             model:'pog', 
//             type:'set0', 
//             color:'qwerty'
//         },
//         {
//             model:'pog', 
//             type:'set0', 
//             color:'qwerty'
//         }
//     ]);

//     //Function Button Click
//     function handleShowModal(){ //show atau hide modal
//         setModalState(!modalState);
//     }
    
//     function handleAddNewCar(newCar){
//         setCarList(oldList => [...oldList, newCar]);
//         setModalState(!modalState);
//     }

//     function handleDeleteCar(id) {
//         setCarList(oldList => oldList.filter((_, index) => index !== id));
//     }

//     function handleEditData(id){
//         setEditing(id);
//     }

//     //Function handle change properties
//     function handleOnChange(e){
//         if(e.target.name === 'model'){
//             setForm(prevForm => ({
//                 ...prevForm,
//                 model: e.target.value
//             }));
//         } else if(e.target.name === 'type'){
//             setForm(prevForm => ({
//                 ...prevForm,
//                 type: e.target.value
//             }));
//         } else if(e.target.name === 'color'){
//             setForm(prevForm => ({
//                 ...prevForm,
//                 color: e.target.value
//             }));
//         }
//     }

//     if(carList.length !== 0){
//         return(
//             <div>
//                 <div id="modal" style={{
//                     overflow:"hidden",
//                 }}>
//                 {modalState && createPortal(
//                     <ModalForm handleClickClose={handleShowModal} handleClickSave={handleAddNewCar}/>,document.getElementById('modal')
//                     )}
//                 </div>
//                 <table className="ui selectable celled table">
//                     <thead>
//                         <tr>
//                             <th>Image</th>
//                             <th>Description</th>
//                             <th>Action &nbsp;<button onClick={handleShowModal} className="ui button primary">Add data +</button></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {carList.map((car, index) => {
//                             return(
//                                 <tr key={index}>
//                                     <td>Image</td>
//                                     <td>
//                                         <div>
//                                             <p>
//                                                 {index===isEditing ? (
//                                                     <>
//                                                     <label>Model : </label><input name='model' value={car.model} onChange={handleOnChange}/><br/>
//                                                     <label>Type&emsp;: </label><input name='type' value={car.type}/><br/>
//                                                     <label>Color &nbsp;: </label><input name='color' value={car.color}/><br/>
//                                                     </>
//                                                 ) : (
//                                                     <>
//                                                     Model : {car.model}<br/>
//                                                     Type&emsp;: {car.type}<br/>
//                                                     Color &nbsp;: {car.color}<br/>
//                                                     </>
//                                                 )}
//                                             </p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div>
//                                             {index===isEditing ? (
//                                                 <>
//                                                 <button className="ui green button">Save ✔</button>
//                                                 <button className="ui red button">Cancel X</button>
//                                                 </>
//                                             ) : (
//                                                 <>
//                                                 <button className="ui yellow button" onClick={()=>(handleEditData(index))}>Edit</button>
//                                                 <button className="ui red button" onClick={()=>(handleDeleteCar(index))}>Delete</button>
//                                                 </>
//                                             )}
//                                         </div>
//                                     </td>
//                                 </tr>
//                             );
//                         })}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
//     return(
//         <>
//             <div id="emptyModal" style={{
//                 overflow:"hidden",
//             }}>
//             {modalState && createPortal(
//                 <ModalForm handleClickClose={handleShowModal} handleClickSave={handleAddNewCar}/>,document.getElementById('emptyModal')
//                 )}
//             </div>
//             <h1 className="ui header"> No Data Yet!</h1>
//             <button onClick={handleShowModal} className="ui button primary">Add data +</button>
//         </>
//     );
// }