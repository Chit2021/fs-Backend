export default class ProductService {
    constructor() {
        this.products = [
            { id: 1, name: "Product No1", price: 100 },
            { id: 2, name: "Product No2", price: 200 },
            { id: 3, name: "Product No3", price: 300 }
        ];
    }
    getAllProducts() {
        return this.products;
    }
    getProductById(id) {
        return this.products.find(product => product.id === id);
    }
    createProduct(name, price) {
        const id = this.products.length + 1;
        const newProduct = { id, name, price };
        this.products.push(newProduct);
        return newProduct;
    }
    updateProduct(id, name, price) {
        let updatedProduct;
        this.products = this.products.map(product => {
            if (product.id === id) {
                updatedProduct = Object.assign(Object.assign({}, product), { name, price });
                return updatedProduct;
            }
            return product;
        });
        return updatedProduct;
    }
    deleteProduct(id) {
        this.products = this.products.filter(product => product.id !== id);
    }
}
