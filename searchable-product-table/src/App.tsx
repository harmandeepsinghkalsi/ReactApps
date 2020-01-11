import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={PRODUCTS}></FilterableProductTable>
    </div>
  );
}

function FilterableProductTable(props: { products: any; }) {

  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockyOnly] = useState(false);

  return (
    <div>
      <SearchBar setFilterText ={setFilterText} setInStockyOnly ={setInStockyOnly} 
      filterText={filterText} inStockOnly={inStockOnly}></SearchBar>
      <ProductTable filterText={filterText} inStockOnly={inStockOnly} 
      products={props.products}></ProductTable>
    </div>
  )
}

function SearchBar(props: { filterText: any; inStockOnly: any; setFilterText: (arg0: string) => void; setInStockyOnly: (arg0: boolean) => void; }) {

  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;


  return (
    <form>
      <input type="text" placeholder="Search..."  onChange={ e => props.setFilterText(e.target.value)} 
      value={filterText}/>
      <p>
      <input type="checkbox" checked={inStockOnly} onChange={ e=> props.setInStockyOnly(e.target.checked)}/> {' '}Only show products in stock
      </p>
    </form>
  )
}

function ProductTable(props: { filterText: any; inStockOnly: any; products: any[]; }) {
  
const filterText = props.filterText;
const inStockOnly = props.inStockOnly;
const rows: any[] =[];
let lastCategory: null = null;

props.products.forEach( (product: any) => {
  if (product.name.indexOf(filterText) === -1) {
    return;
  }
  if (inStockOnly && !product.stocked) {
    return;
  }
  if(product.category!== lastCategory){
    rows.push(
    <ProductCategoryRow 
      category={product.category}
      key={product.category}/>
      );
  }

  rows.push(
    <ProductRow 
      product={product}
      key={product.name}
    />
  );

  lastCategory = product.category;
});
  
  return (

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}


function ProductCategoryRow(props: any) {
  
  const category = props.category;
  
  return(
    <tr>
      <th colSpan={2}>
        {category}    
      </th>
    </tr>
  );
}

function ProductRow(props: { product: any; }) {

  const product = props.product;
  const name = product.stocked ? product.name:
  <span style={{color:"red"}}>{product.name}</span>;

  return(

    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>

  );
}

export default App;