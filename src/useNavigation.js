import { useState } from "react";

const useNavigation = () =>{
    const [show,setShow] = useState(false);
    const [close,setClose] = useState(false)
    const[menu,setMenu] = useState(true)
    const display = () =>{
        setShow(true)
        setClose(true)
        setMenu(false)
    }
    const closedisplay = () =>{
        setShow(false)
        setClose(false)
        setMenu(true)
    }
    return {show,close,menu,display,closedisplay}
}

export default useNavigation