import React from 'react';
import lupa from '../../images/lupa.png'

function MenuInspiration(props){
  const list = props.data.categories;
  return(
    <div className='container-menu'>
      <ul className="inspiration-list">
        {
          list.slice(0,5).map((item) => {
            return(
              <li key={item.id}>
                <img src = {item.image} />
              </li>
            )
          })
        }
      </ul>
      {props.children}
    </div>
  )
}

export default MenuInspiration;
