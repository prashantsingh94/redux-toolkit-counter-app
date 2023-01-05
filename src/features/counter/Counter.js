import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";
const Counter = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch();
   return (
    <section>
     <p>Counter:~ {count}</p>
      <div>
       <button onClick={() => dispatch(increment())}>+</button>
       <button onClick={() => dispatch(decrement())}>-</button>
       <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </section>
 )
}

export default Counter;