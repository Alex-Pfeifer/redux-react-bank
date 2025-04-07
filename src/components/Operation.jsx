import {useState} from "react";
import {deposit, withdraw} from "../action/accountActions.js";
import {useDispatch} from "react-redux";

const Operation = () => {
    const [sum, setSum] = useState(0);
    const dispatch = useDispatch();

    return (
        <div className={'d-flex justify-content-center'}>
            <button onClick={() => dispatch(withdraw(sum))} className={'btn btn-primary btn-lg'}>Withdraw</button>
            <input className={'form-control-lg text-center'} type={'number'} onChange={e =>setSum(+e.target.value)} value={sum} />
            <button onClick={() => dispatch(deposit(sum))} className={'btn btn-primary btn-lg'}>Deposit</button>
        </div>
    );
};

export default Operation;