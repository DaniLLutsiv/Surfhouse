import React from 'react'

export const WithSuspense = (Component) => (props) =>{
	return <React.Suspense fallback={<div>Loading...</div>}> 
        <Component {...props}/>
    </React.Suspense>
	
}