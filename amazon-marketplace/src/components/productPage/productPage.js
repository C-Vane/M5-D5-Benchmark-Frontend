/* import React from "react";
import { getFunction, putFunction, postFunction, deleteFunction } from "../CRUDfunctions";

class ProductPage extends React.Component {
  render() {
    state = {
      reviews: [],
      product: [],
      loading: true,
      status: "",
      currentReview: {
        comment: "",
        rate: 3,
        elementId: this.props.ID,
      },
    };
    componentDidMount = () => {
      this.getProducts();
      this.getReviews();
    };
    getProduct = async () => {
      let product = await getFunction("/products/" + id);
      if (product.length > 0) {
        this.setState({ product, loading: false });
      } else {
        this.setState({ status: "No products" });
      }
    };
    getReviews = async () => {
      let reviews = await getFunction("/reviews/" + id);
      if (reviews.length > 0) {
        this.setState({ reviews, loading: false });
      } else {
        this.setState({ status: "No reviews" });
      }
    };
    postReview = async (e) => {
      e.preventDefault();
      let result = await postFunction("/reviews", this.state.currentReview);
      if (result) {
        this.setState({ status: "review Added", loading: false });
      } else {
        this.setState({ status: result });
      }
    };
    putReview = async (e) => {
      e.preventDefault();
      let result = await putFunction("/reviews", this.state.currentReview);
      if (result) {
        this.setState({ status: "review Edited", loading: false });
      } else {
        this.setState({ status: result });
      }
    };
    deleteReviews = async (id) => {
      let result = await getFunction("/reviews/" + id);
      if (result) {
        this.setState({ status: "Review Deleted", loading: false });
      } else {
        this.setState({ status: result });
      }
    };
    return <div></div>;
  }
}

export default ProductPage; */
