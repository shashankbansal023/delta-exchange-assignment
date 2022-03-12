import React,{useState} from 'react'
import Checkbox from '../Checkbox';
import './index.css'


const Select=({heading ,choices ="",checkedProps={}, onChange=()=>{}})=>{

    const [select , setSelect] = useState(false);

  
    function toggleSelect(){
        setSelect(!select);
    }

    return(
        <div className="select-box">
            
            <div className="select-heading" onClick={toggleSelect}>
                {heading.toUpperCase()}
            </div>
            
            {
                select && (
                    <div className="choices-container">
                        {
                            choices &&choices.map(choice=>{
                                return (
                                    <div className='choice'>
                                        <Checkbox heading={heading} name={choice} onChange={onChange} checked={checkedProps[choice]} label={choice}/>
                                    </div>
                                )
                            })
                        }

                    </div>
                )
            }
        </div>
    )
}

export default Select;