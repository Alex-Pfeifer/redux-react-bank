import {useSelector} from "react-redux";
import {deposit} from "../fautures/deposit/depositSlice.js"
import {withdraw} from "../fautures/withdraw/withdrawSlice.js"


const Operation = () => {
    // const [sum, setSum] = useState(0);
    // const dispatch = useDispatch();
    const {deposit, withdraw} = useSelector(state => state.balance);


    return (
        <div className={'d-flex justify-content-center'}>
            <button onClick={() => {withdraw}} className={'btn btn-primary btn-lg'}>Withdraw</button>
            <input className={'form-control-lg text-center'} type={'number'} onChange={e =>setSum(+e.target.value)} value={sum} />
            <button onClick={() => {deposit}} className={'btn btn-primary btn-lg'}>Deposit</button>
        </div>
    );
};

export default Operation;