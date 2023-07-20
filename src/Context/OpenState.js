import React from 'react'

export const openContext = React.useContext()

export const openState =({children})=> {
	
	const [open, setOpen] = React.useState({
		                         item: false, auth: false, mail: false})
		                         
    const openItemForm =()=> setOpen({...open, item: true})
    const closeItemForm =()=> setOpen({...open, item: false})
    
    return(
    <OpenContext.Provider value={{itemForm: open.item,
		                          openItemForm,
		                          closeItemForm}}> 
	  {children}
    </OpenContext.Provider>
    )
	}
