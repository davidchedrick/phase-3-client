// import { useContext, useEffect, useState } from "react";
// import { UserContext } from "../context/user";

// function NewChild({addingChild, setAddingChild}) {

//     const [childData, setChildData] = useState({
//         name: "",
//     });    
//     const [user, setUser] = useContext(UserContext);
//     const [newChild, setNewChild] = useState({})
//     console.log('newChild: ', newChild);
    

//     function addNewChild(newChild) {
//         console.log("newChild: ", newChild);
//         fetch("http://localhost:9292/children", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newChild),
//         })
//             .then(resp => resp.json())
//             .then(child => {
//                 console.log(child);
//             });
//     }

//     function handleChildData(e) {
//         let targetName = e.target.name;
//         let targetValue = e.target.value;

//         setChildData({
//             ...childData,
//             [targetName]: targetValue,
//         });
//     }

//     function handleSubmit(e) {
//         e.preventDefault();

//         const newChild = {
//             ...childData,
//             points: 0,
//             user_id: user.id,
//         };

//         setNewChild(newChild)
//     }

//     function handlePostChild(){
//         console.log('newChild$$$$: ', newChild);
            
//         newChild? console.log(newChild) : console.log("log data");

        
//         setChildData({
//             name: "",
//         });
//         setAddingChild(false);
//     }

//     useEffect(() => {
//         console.log("!!!!!!!!!!!!")
//         console.log('newChild: ', newChild);
//         newChild == {} ? console.log("create Child failed") : handlePostChild();
        
//     }, [newChild]);    

//     return (
//         <form className="p-3 mt-2" onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="Child Name"
//                 name="name"
//                 onChange={handleChildData}
//             />

//             <input type="submit"></input>
//         </form>
//     );
// }

// export default NewChild;
