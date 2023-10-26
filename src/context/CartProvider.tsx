import {
  useReducer,
  useMemo,
  createContext,
  ReactElement,
} from "react";
import data from "../../src/data/db.json"


export type CartItemType = {
  id: number;
  product_name: string;
  sizes: string;
  image_url: string;
  price: number;
  // quantity: {
  //   [key: string]: number
  // }
  quantity?: any;
  // quantity: {
  //   small: number;
  //   medium: number;
  //   large: number;
  // }
};

type CartStateType = { cart: CartItemType[] };

const initCartState: CartStateType = { cart: [] };

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SIZES: "SIZES",
  SUBMIT: "SUBMIT",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
  
};

// type HandleAddToCart = (product: CartItemType) => Promise<void>;

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("action.payload missing in ADD action");
      }
      const { id, product_name, image_url, price, sizes, quantity } = action.payload;

      const sizereceived = sizes
      console.log("size che", sizereceived)
   
      // const filteredCart: CartItemType[]= state.cart.filter(item => item.id !== id)

      // const itemExists: CartItemType | undefined = state.cart.find(item => item.id === id)

      const product = data.products.find((product) => product.id === id);

      if (!product) {
        throw new Error("Product not found");
      }

      const availableQuantity = product.quantity[sizereceived as "small" | "medium" | "large"]

     console.log("checking quantity", availableQuantity)

      const itemInCart = state.cart.find((item) => item.id === id);

    console.log("itemIn console" + itemInCart);
      

      const newTotalQuantity = itemInCart ? itemInCart.quantity + quantity : quantity;
      console.log("newQuant", newTotalQuantity)
      console.log("itemincart", )

      // sessionStorage.setItem("cart", JSON.stringify(state));

      if (newTotalQuantity <= availableQuantity) {
        const filteredCart = state.cart.filter((item) => item.id !== id);

        return {
          ...state,
          cart: [...filteredCart, { id, product_name, image_url, sizes, price, quantity }],
          
          
        };

    

        
        
      } else {
        console.warn("Product quantity not available.");
       
        return state;
      }
     
      
      // const qty: number = itemExists ? itemExists.qty + 1 : 1

      // return { ...state, cart: [ ...filteredCart, {id, name, image, price, qty}]}
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("action.payload missing in REMOVE action");
      }
      const { id } = action.payload;

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );

      return { ...state, cart: [...filteredCart] };
    }
    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error("action.payload missing in QUANTITY action");
      }

      const { id, quantity, sizes } = action.payload;

      const sizeInCart = sizes;
      console.log("cart size", sizeInCart)

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.id === id
      );

      if (!itemExists) {
        throw new Error("Item must exist in order to update quantity");
      }

      const updatedItem: CartItemType = { ...itemExists, quantity };

     

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );

      return { ...state, cart: [...filteredCart, updatedItem] };
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] };
    }
    default:
      throw new Error("Unidentified reducer action type");
  }
};

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);
  
 
  // const storedCart = sessionStorage.getItem('cart');
  // const initialCart = storedCart ? JSON.parse(storedCart): initCartState
  // state.cart = initialCart; 

  // const updateCart = (newCart: CartItemType[]) =>{

  //   newCart.forEach((item)=>{dispatch({ type: REDUCER_ACTIONS.ADD, payload: item})})
    

  //   sessionStorage.setItem('cart', JSON.stringify(newCart))
  // }
 

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  
  const totalItems = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.quantity;
  }, 0);
  const totalPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(
    state.cart.reduce((previousValue, cartItem) => {
      return previousValue + cartItem.quantity * cartItem.price;
    }, 0)
  );
  
  sessionStorage.setItem("item", JSON.stringify(totalItems));
  sessionStorage.setItem("price", JSON.stringify(totalPrice));

  const cart = state.cart.sort((a, b) => {
    const itemA = Number(a.id);
    const itemB = Number(b.id);
    return itemA - itemB;
  });
  sessionStorage.setItem("cart", JSON.stringify(cart));
  

  return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: "",
  cart: [],
 
};

export const CartContext =
  createContext<UseCartContextType>(initCartContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;