import React from 'react'

export const OpenContext = React.createContext()

export const OpenState =({children})=> {
	
	const [open, setOpen] = React.useState({
		                         section: 'intro', alert: false, mail: false})
		                         
    const openAlert =()=> setOpen({...open, alert: true})
    const closeAlert =()=> setOpen({...open, alert: false})
    const openMailForm =()=> setOpen({...open, mail: true})
    const closeMailForm =()=> setOpen({...open, mail: false})
    const nowIntro =()=> setOpen({...open, section: 'intro'})
    const nowProfile =()=> setOpen({...open, section: 'profile'})
    const nowProject =()=> setOpen({...open, section: 'project'})
    const nowContacts =()=> setOpen({...open, section: 'contacts'})
    
    return(
    <OpenContext.Provider value={{alert: open.alert,
		                          mailForm: open.mail,
		                          openAlert, closeAlert,
		                          openMailForm,
		                          closeMailForm}}> 
	  {children}
    </OpenContext.Provider>
    )
	}
