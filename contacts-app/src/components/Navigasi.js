// export default function Navigasi(){

//     state = {
//         active : [1, 0, 0]
//     }

//     handleHomeClick = () => {
//         this.setState(() => ({active : [1, 0, 0]}));
//     }

//     handleContactClick = () => {
//         this.setState(() => ({active : [0, 1, 0]}));
//     }

//     handleAboutClick = () => {
//         this.setState(() => ({active : [0, 0, 1]}));
//     }

//     return(
//         <div class="ui container">
//             <div class="ui secondary menu">
//                 <a class={state.active[0] ? "active item" : "item"}>Home</a>
//                 <a class={state.active[1] ? "active item" : "item"}>Contacts</a>
//                 <a class={state.active[2] ? "active item" : "item"}>About</a>
//             </div>
//         </div>
//     );
// }