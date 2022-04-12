import React from 'react'

const input = (props) => {
    let inputData = null
    const inputClass = [];
    let validationError = null;

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClass.push('classesInvalid')
        validationError = <p className="text-danger">Please enter a valid value!</p>;
    }
    switch (props.elementType) {
        case ('input'):
            inputData =
                (<div className='eachFormData'>
                    <strong className='labelName control-label '><label>{props.elementConfig.label}</label></strong>
                    <input className={inputClass.join(' ')} {...props.elementConfig} value={props.value} onChange={props.onchange} />
                </div>)
            break;
        case ('boolean'):
            inputData =
                (<div className='eachFormData'>
                    <strong className='labelName control-label '><label>{props.elementConfig.label}</label></strong>
                    <input className={inputClass.join(' ')} {...props.elementConfig} defaultChecked={props.value} onChange={props.onchange} />
                </div>)
            break;

        case ('textarea'):
            inputData = (<div className='eachFormData'>
                <strong className='labelName control-label '><label>{props.elementConfig.label}</label></strong>
                <textarea className={inputClass} {...props.elementConfig} value={props.value} onChange={props.onchange} />
            </div>)
            break;
        case ('select'):
            inputData = (
                <div className='eachFormData'>
                    <strong className='labelName control-label '><label>{props.elementConfig.label}</label></strong>
                    <select onChange={props.onchange} className={inputClass}>
                        {(props.elementConfig.options).map((x, i) => {
                            return <option key={i} value={x.value}>{x.displayValue}</option>
                        })}
                    </select>
                </div>
            )
            break;
        default:
            inputData = <input className={inputClass} {...props.elementConfig} value={props.value} onChange={props.onchange} />
    }
    return (
        <div className='eachFormSection'>
            { inputData}
            { validationError}
        </div>
    )
}

export default input