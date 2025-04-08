import {useSelector} from "react-redux";


const Balance = () => {
    // const balance = useSelector(state => state.balance);
    const balance = useSelector(state => state.balance);
    return (
        <div>
           <h1 className={'text-center text-uppercase'}>Iron Bank of Bravos</h1>
            <h2 className={'text-center text-uppercase'}>Balance = {balance}</h2>
        </div>
    );
};

export default Balance;