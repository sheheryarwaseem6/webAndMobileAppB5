import BootstrapForm from "../FormInput/BootstrapForm";
import NavBar from "../NavBar/NavBar";

function ConditionalComponent(){
    let isTrue = false
    if(isTrue){
        return(
            <>
            <NavBar/>
            </>
        )
    }
    else{
        return(
            <>
            <BootstrapForm/>
            </>
        )
    }
}

export default ConditionalComponent;
