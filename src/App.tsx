import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import mapping from './RouterMapping'

import './scss/index.scss'
import LoadingImg from "./assets/images/Loading.gif"

interface AppStatus {
	preloading: boolean
}

function App() {
	const [status, setStatus] = React.useState<AppStatus>({
		preloading: false
	})

	React.useEffect(() => {
		window.setInterval(() => {
			setStatus({preloading: false})
		}, 3000)
	}, [])

	return (
		<>
            {status.preloading && (
                <div className="loading">
                    <img src={LoadingImg} alt="Loading..." />
                </div>
            )}
			<BrowserRouter>
				<Routes>
					{Object.keys(mapping).map((url:string, k:number) => (
						<Route 
							key={k} 
							path={url} 
							element={(
								<Layout>
									{mapping[`${url}`]}
								</Layout>
							)}
						/>
					))}
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
