import React,{useState} from 'react'
import Checkbox from '../Checkbox';


const Select=({heading ,choices ="",checkedProps={}, onChange=()=>{}})=>{

    const [select , setSelect] = useState(false);

  
    function toggleSelect(){
        setSelect(!select);
    }

    return(
        <div>
            <div onClick={toggleSelect}>{heading}</div>
            {
                select && (
                    <div>
                        {
                            choices &&choices.map(choice=>{
                                return (
                                    <div>
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