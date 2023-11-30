import React from "react";
import { createPortal } from "react-dom";
import ModalForm from "./ModalForm";

export default function Car(){

    // State : kondisi modal saat ini
    const [modalState, setModalState] = React.useState(false);
    
    // State : menyimpan daftar mobil
    const [carList, setCarList] = React.useState([
        {
            model:'pog', 
            type:'set0', 
            color:'qwerty'
        },
        {
            model:'pog', 
            type:'set0', 
            color:'qwerty'
        },
        {
            model:'pog', 
            type:'set0', 
            color:'qwerty'
        }
    ]);

    //Function Button Click
    function handleShowModal(){ //show atau hide modal
        setModalState(!modalState);
    }
    
    function handleAddNewCar(newCar){
        setCarList(oldList => [...oldList, newCar]);
        setModalState(!modalState);
    }

    function handleDeleteCar(id) {
        setCarList(oldList => oldList.filter((_, index) => index !== id));
    }    

    if(carList.length !== 0){
        return(
            <div>
                <div id="modal" style={{
                    overflow:"hidden",
                }}>
                {modalState && createPortal(
                    <ModalForm handleClickClose={handleShowModal} handleClickSave={handleAddNewCar}/>,document.getElementById('modal')
                    )}
                </div>
                <table className="ui selectable celled table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Action &nbsp;<button onClick={handleShowModal} className="ui button primary">Add data +</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {carList.map((car, index) => {
                            return(
                                <tr key={index}>
                                    <td>Image</td>
                                    <td>
                                        <div>
                                            <p>
                                                Model : {car.model}<br/>
                                                Type&emsp;: {car.type}<br/>
                                                Color &nbsp;: {car.color}<br/>
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <button className="ui yellow button">Edit</button>
                                            <button className="ui red button" onClick={()=>(handleDeleteCar(index))}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
    return(
        <>
            <h1> No Data Yet!</h1>
            <button>Add data +</button>
        </>
    );
}