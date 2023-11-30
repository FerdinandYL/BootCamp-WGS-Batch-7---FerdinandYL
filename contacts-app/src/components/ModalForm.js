import React from "react";

export default function ModalForm({handleClickClose, handleClickSave}){

    const [form, setForm] = React.useState(
        {
            model:"",
            type:"",
            color:""
        }
    );

    function handleOnChange(e){
        if(e.target.name === 'model'){
            setForm(prevForm => ({
                ...prevForm,
                model: e.target.value
            }));
        } else if(e.target.name === 'type'){
            setForm(prevForm => ({
                ...prevForm,
                type: e.target.value
            }));
        } else if(e.target.name === 'color'){
            setForm(prevForm => ({
                ...prevForm,
                color: e.target.value
            }));
        }
    }

    return(
        <div style={{
            position: 'fixed',
            height: '100vh',
            width: '100vw',
            backgroundColor : 'rgba(0, 0, 0, 0.7)',
        }} onClick={handleClickClose}>
        <div className="ui active modal" style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }}>
            <form className="ui form" onSubmit={(e)=>{e.preventDefault();e.stopPropagation()}} style={{
                margin:'10px'
            }}>
                <h3 className="ui dividing header">Menambah Data Mobil</h3>
                <div className="field">
                    <label>Model</label>
                    <input type="text" name='model' placeholder="Model" onChange={handleOnChange} onClick={e=>e.stopPropagation()}/>
                </div>
                <div className="field">
                    <label>Type</label>
                    <input type="text" name='type' placeholder="Type" onChange={handleOnChange} onClick={e=>e.stopPropagation()}/>
                </div>
                <div className="field">
                    <label>Color</label>
                    <input type="text" name='color' placeholder="Color" onChange={handleOnChange} onClick={e=>e.stopPropagation()}/>
                </div>
                <button className="ui positive button" onClick={(e)=>{e.preventDefault();handleClickSave(form)}}>Submit</button>
                <button className="ui negative button" onClick={(e)=>{e.preventDefault();handleClickClose();setForm({model:'',type:'',color:''})}}>Cancel</button>
            </form>
        </div>
        </div>
    );
}