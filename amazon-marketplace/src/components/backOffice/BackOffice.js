import React from "react";
import { getFunction, putFunction, postFunction, deleteFunction } from "../CRUDfunctions";

class BackOffice extends React.Component {
  state = {
    products: [],
    loading: true,
    status: "",
    currentProduct: {
      name: "",
      description: "",
      brand: "",
      category: "",
      price: 0,
    },
  };
  componentDidMount = () => {
    this.getProducts();
  };
  getProducts = async () => {
    let products = await getFunction("/products");
    if (products.length > 0) {
      this.setState({ products, loading: false });
    } else {
      this.setState({ status: "No products" });
    }
  };
  postProduct = async (e) => {
    e.preventDefault();
    let result = await postFunction("/products", this.state.currentProduct);
    if (result) {
      this.setState({ status: "Product Added", loading: false });
    } else {
      this.setState({ status: result });
    }
  };
  putProduct = async (e) => {
    e.preventDefault();
    let result = await putFunction("/products", this.state.currentProduct);
    if (result) {
      this.setState({ status: "Product Edited", loading: false });
    } else {
      this.setState({ status: result });
    }
  };
  deleteProducts = async (id) => {
    let result = await deleteFunction("/products/" + id);
    if (result) {
      this.setState({ status: "Product Deleted", loading: false });
    } else {
      this.setState({ status: result });
    }
  };
  render() {
    return <div></div>;
  }
}

export default BackOffice;
