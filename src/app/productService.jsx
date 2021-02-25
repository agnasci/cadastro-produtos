const PRODUCTS = '_PRODUCTS'

export function errorValidation(error) {
    this.error = error
}

export default class ProductService {

    validate = (product) => {
        const error = []

        if(!product.name) {
            error.push('O campo nome é obrigatório.')
        }

        if(!product.sku) {
            error.push('O campo SKU é obrigatório.')
        }

        if(!product.price || product.price <= 0) {
            error.push('O campo preço deve ter um valor maior que zero.')
        }

        if(!product.description) {
            error.push('O campo descrição é obrigatório.')
        }

        if(!product.supplier) {
            error.push('O campo fornecedor é obrigatório.')
        }

        if (error.length > 0) {
            throw new errorValidation(error)
        }
    }

    save = (product) => {

        this.validate(product)

        let products = localStorage.getItem(PRODUCTS)

        if (!products) {
            products = []
        } else {
            products = JSON.parse(products)
        }

        products.push(product);

        localStorage.setItem(PRODUCTS, JSON.stringify(products))
    }
}