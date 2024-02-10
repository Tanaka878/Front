import React from 'react'
import OptionPage
 from './OptionPage';
 import OptionsData from './OptionsData';
import { useNavigate } from 'react-router-dom';


const OptionLinkPage = (props) => {
    const infoArray = OptionsData;
    const navigate = useNavigate()
    

  let d = infoArray.map(function(item){
    
    return <OptionPage
    SelectionId={item.id}
    bal={item.itemName}
    value={item.val}
    i={item.url}
    text={item.textValue}
    click={DivClick}


    />
    
  })

  function DivClick(itemId){
    console.log(`clicked ${itemId}`)

    if(itemId=== 2){
      navigate('/feesPayment')

    }else if(itemId ===3){
      navigate('/buyAirTime')
    }else if(itemId===4){
      navigate('/ZIPIT')
    }else if(itemId===1){
      navigate('/RequestBalance')
    }
  }

  return (
    <div className='optionDivs'>

      <nav style={{backgroundColor:'royalblue'}} className='OptionDivHeader'>
       
        <h6>NAME :{props.name}</h6>
        <h5>ACCOUNT HOLDER :{props.AccountHolder}</h5>
        <h5>ACCOUNT BALANCE :{props.bal}</h5>
      </nav>

        {d}

      
    </div>
  )
}

export default OptionLinkPage
