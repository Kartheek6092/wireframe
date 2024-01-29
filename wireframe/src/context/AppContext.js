import React from "react";

const AppContext = React.createContext({
    item: '',
    
    updateItem: () => {},
})

export default AppContext