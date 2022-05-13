

function Nav({ user }) {
  console.log('user: ', user);

 function handleDelete(user){
   console.log('user.id): ', user.id)
    
   console.log("cat545454455")
    fetch(`http://localhost:9292/users/${user.id}`, {
      method: "DELETE",
    });
 }
    return (
      <div className="Nav">
         
  
    <div onClick={() => handleDelete(user)}>{user.username}  x</div>
    
   
    </div>
    )
  }
  
  export default Nav;