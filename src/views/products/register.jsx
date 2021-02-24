import React from 'react'

class RegisterProduct extends React.Component {

    state = {
        name: '',
        sku: '',
        description: '',
        price: 0,
        supplier: ''

    }

    onChange = e => {
        const value = e.target.value
        const nameField = e.target.name
        this.setState({[nameField]: value})
    }

    onSubmit = e => {
        console.log(this.state)
    }

    onClear = () => {
        this.setState({
            name: '',
            sku: '',
            description: '',
            price: 0,
            supplier: ''
        
            })
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Cadastro de Produto
                </div>
                <div className="card-body">
                    
                    <div className="row">

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <input type="text" onChange={this.onChange} name="name" className="form-control" value={this.state.name} />
                            </div>
                        </div>

                        <div className="col-md-6">
                             <div className="form-group">
                                <label>SKU: *</label>
                                <input type="text" onChange={this.onChange} name="sku" className="form-control" value={this.state.sku} />
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descrição:</label>
                                <textarea className="form-control" onChange={this.onChange} name="description" value={this.state.description} ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço: *</label>
                                <input type="text" name="price" onChange={this.onChange} className="form-control" value={this.state.price} />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor: *</label>
                                <input type="text" name="supplier" onChange={this.onChange} className="form-control" value={this.state.supplier} />
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-1">
                            <button onClick={this.onSubmit} className="btn btn-success">Salvar</button>
                        </div>

                        <div className="col-md-1">
                            <button onClick={this.onClear} className="btn btn-primary">Limpar</button>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default RegisterProduct;