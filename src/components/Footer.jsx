function Footer({name}){
    return (
    <> 
    <div className="foot" >
    <hr/>
     <p> © 2024 One Ring Rentals. All rights reserved.</p>
     <p>  {name.author}    </p>
     <p>  {name.id}    </p>

            
    </div>

    </>
    )
}

export default Footer;

