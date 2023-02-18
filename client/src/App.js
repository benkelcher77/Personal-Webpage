import React, { useEffect, useState } from 'react';

function App() {

    const [backendData, setBackendData] = useState([{}]);
    useEffect(() => {
        fetch("/git").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, []);

    return (
        <div>
            {
                (typeof backendData === "undefined") 
                ? (<p>Loading...</p>)
                : (
                    backendData.map((repo, i) => {
                        return (<p key={i}>{repo.name}</p>);
                    })
                )
            } 
        </div>
    );
}

export default App;
