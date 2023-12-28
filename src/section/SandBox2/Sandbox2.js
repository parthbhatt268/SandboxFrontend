import React from 'react'
import { connect, useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from '../../Store/ActionTypes/Action';
import { withRouter } from "react-router";

function Sandbox2(props) {
  return (
    <div>
   <h2>Number of items in Cart: {props.masterList}</h2>
      <button
        onClick={() => {
          props.addItem();
        }}
      >
        Add Item to Cart
      </button>
      <button
        disabled={props.masterList > 0 ? false : true}
        onClick={() => {
          props.deleteItem();
        }}
      >
        Remove Item to Cart
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  masterList: state.cartReducer.numOfItems,
});
const mapDispatchToProps = {
  addItem,
  deleteItem
};




export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Sandbox2);