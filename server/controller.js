module.exports = {
    getProducts: (req,res) => {
        const dbInstance = req.app.get('db');

        dbInstance.show_products()
        .then(product => res.status(200).send(product))
        .catch(err => console.log(err));
    },
    addProduct: (req,res) => {
        const dbInstance = req.app.get('db');
        const { imgurl,productname,price } = req.body;

        dbInstance.add_product([imgurl,productname,price])
        .then(product => res.status(200).send(product))
        .catch(err => console.log(err));
    },
    deleteProduct: (req,res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;

        dbInstance.delete_product([id])
        .then(products => res.status(200).json(products))
        .catch(err => console.log(err));
    },
    editProduct: (req,res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        const { img,name,price } = req.body;

        dbInstance.editProduct([img,name,price,id])
        .then(product => res.status(200).json(product))
        .catch(err => console.log(err));
    }
}