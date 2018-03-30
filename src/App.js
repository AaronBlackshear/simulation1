import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
// import { Route,Link,Switch } from 'react-router-dom';

class App extends Component {
  constructor(){
    super()
    this.state={
      products: [],
      currentProduct: ''
    }
    this.getProducts = this.getProducts.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }

  componentDidMount(){
    this.getProducts()
  }

  getProducts(){
    axios.get('/api/products')
        .then(res => this.setState({products: res.data}))
        .catch(console.log);
  }

  toggleEdit(cur){
    this.setState({currentProduct: cur})
  }

  editProduct(cur){
    this.setState({currentProduct: cur})
  }

  render() {
    const { products,currentProduct } = this.state;
    // let productList = products.map((cur,ind) => {
    //   return (<div key={cur.id} className='product-container'> <img className='image' src={cur.image_url || 'http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder2.png'} />
    //   <h5 className='product-name'>{cur.product_name}</h5> <br/> <p className='price'>${cur.price}</p> </div>)
    // })

    return (
      <div className="App">
          {/* <Switch>
            <Route exact path='/' component={Header}>
              <Switch>
              <Route path='/Form' component={Form}>Form</Route>
              <Route path='/Dashboard' component={Dashboard}>Dashboard</Route>
              </Switch>
            </Route>
          </Switch> */}
        <Header />
        <Form component={this.getProducts} current={currentProduct} />
        <Dashboard productList={products} component={this.getProducts} toggleEdit={this.toggleEdit} edit={this.editProduct} />
      </div>
    );
  }
}

export default App;
