import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import lupa from '../../images/lupa.png'

function MenuTopics(props){
  const list = props.data.categories;
  return(
    <div className='container-menu'>
      <ul className="topic-list hidden-xs">
        {
          list.map((item) => {
            return(
              <li key={item.id}>
                <Link to='/topics'>{item.title}</Link>
              </li>
            )
          })
        }
        <li>
          <img src={lupa} />
        </li>
      </ul>
    </div>
  )
}

export default MenuTopics;
