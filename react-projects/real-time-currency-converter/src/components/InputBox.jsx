import React, {useId} from 'react'

function InputBox({
    label,   
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency,
    currencyOptions = [],
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   
    const handleAmountChange = (e) => {
        const value = Number(e.target.value);
        if (!isNaN(value)) {
            onAmountChange && onAmountChange(value);
        }
    };

    const handleCurrencyChange = (e) => {
        const currency = e.target.value;
        onCurrencyChange && onCurrencyChange(currency);
    };

    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input   
                id = {amountInputId}                
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value={amount}
                    onChange={handleAmountChange }
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={handleCurrencyChange }
                    disabled = {currencyDisable}
                >
                    
                    {
                        currencyOptions.map((currency)=>(
                            <option key = {currency} value={currency}>
                                {currency}
                            </option>
                        ))
                    }
                        
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
