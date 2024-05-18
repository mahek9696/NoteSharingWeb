import { useDispatch } from "react-redux";
import { PiListPlusBold } from "react-icons/pi";
 import { addCartItem } from "../../redux/productSlice";
const AddToCartButton = ({ product }) => {

    const dispatch = useDispatch();
    const handleAddCartProduct = (e) => {
        dispatch(
            addCartItem(product)
        );
        // console.log(product)
        // let CartProducts = JSON.parse(localStorage.getItem("cart") || "[]")
        // CartProducts.push(product)
        
    };
    return (
    <div className="flex justify-left items-center  w-full">
            {/* <button
              className="bg-sky-300 hover:bg-sky-400 py-2 my-2 mt-2 px-5 rounded justify-center items-center w-3/4"
              onClick={handleAddCartProduct}
            > */}
        <button
                  className="bg-sky-300 p-2  m-2 rounded justify-center items-center rounded"
                  onClick={handleAddCartProduct}
                >
              <PiListPlusBold className="m-1"/>
            </button>
    </div>
)
}
export default AddToCartButton