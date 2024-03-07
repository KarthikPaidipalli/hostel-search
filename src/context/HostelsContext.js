import React from "react";

const HostelsContext = React.createContext({
    hostelslist: [],
    addnewhostel:()=>{}
});

export default HostelsContext;
