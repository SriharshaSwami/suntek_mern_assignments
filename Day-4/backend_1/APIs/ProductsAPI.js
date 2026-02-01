import exp from 'express'
//create mini express application (Seperate Route)
export const productApp = exp.Router()
import exp from 'express'

export const productApp = exp.Router()

// In-memory products store
let products = []

// Get all products
productApp.get('/products', (req, res) => {
    res.status(200).json({ message: 'All products', payload: products })
})

// Add product
productApp.post('/products', (req, res) => {
    const newProduct = req.body
    // ensure numeric productId if provided as string
    if (newProduct && newProduct.productId) newProduct.productId = Number(newProduct.productId)
    products.push(newProduct)
    res.status(201).json({ message: 'Product added', payload: newProduct })
})

// Update a product by productId (expects productId in body)
productApp.put('/products', (req, res) => {
    const upProduct = req.body
    const upIndex = products.findIndex(p => p.productId === Number(upProduct.productId))
    if (upIndex === -1) return res.status(404).json({ message: 'Product not found' })
    products.splice(upIndex, 1, upProduct)
    res.status(200).json({ message: 'Product modified', payload: upProduct })
})

// Get product by id
productApp.get('/product-id/:id', (req, res) => {
    const pid = Number(req.params.id)
    const pIndex = products.findIndex(product => product.productId === pid)
    if (pIndex !== -1) return res.status(200).json({ message: 'Product found', payload: products[pIndex] })
    res.status(404).json({ message: 'Product not found' })
})

// Get product by brand name
productApp.get('/product-name/:brand', (req, res) => {
    const brand = req.params.brand
    const pIndex = products.findIndex(product => product.brand === brand)
    if (pIndex !== -1) return res.status(200).json({ message: 'Product found', payload: products[pIndex] })
    res.status(404).json({ message: 'Product not found' })
})

// Delete product by id
productApp.delete('/products/:id', (req, res) => {
    const deleteId = Number(req.params.id)
    const deleteIndex = products.findIndex(p => p.productId === deleteId)
    if (deleteIndex === -1) return res.status(404).json({ message: 'Product not found' })
    const deleted = products.splice(deleteIndex, 1)
    res.status(200).json({ message: 'Product deleted', payload: deleted[0] })
})
        res.status(404).json({message: "Product not found"})
    }

    //delete request handling route (Delete products)
        productApp.delete('/products/id',(req,res) => {
            //get the product id form res
            let deleteIndex = Number(req.params.id)
            let deletedProduct = products.find(productObj => productObj.productid == deleteIndex);
            //Use Splice for deleting
            products.splice(deleteIndex,1)
            //send req as the "Product Deleted"
            res.status(200).json({message:"Product Deleted",payload:products})
        })
})

