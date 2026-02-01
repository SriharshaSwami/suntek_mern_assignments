//create HTTP server
//Import express
import exp from 'express'
import { productApp } from './APIs/ProductsAPI.js'
import { userApp } from './APIs/users_api.js'

// Create server
const app = exp()

// Body parsing middleware
app.use(exp.json())

// setting url path for each api
app.use('/user-api', userApp)
app.use('/product-api', productApp)

// Error-handling middleware (must be registered after routes)
app.use((err, req, res, next) => {
	console.error(err)
	res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' })
})

// Assigning port number
app.listen(3000, () => console.log('HTTP server is listening on port 3000'))