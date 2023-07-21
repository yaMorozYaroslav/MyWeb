import React from 'react'

export const OpenContext = React.createContext()

export const OpenState =({children})=> {
	
	const [open, setOpen] = React.useState({
		                         item: false, auth: false, mail: false})
		                         
    const openMailForm =()=> setOpen({...open, mail: true})
    const closeMailForm =()=> setOpen({...open, mail: false})
    
    return(
    <OpenContext.Provider value={{mailForm: open.mail,
		                          openMailForm,
		                          closeMailForm}}> 
	  {children}
    </OpenContext.Provider>
    )
	}
