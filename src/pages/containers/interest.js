import React from 'react';

function Interest(props){
  const list = props.data.categories;
  return(
    <div className='container-menu'>
      <ul className="topic-list">
        {
          list.map((item) => {
            return(
              <li key={item.id}>
                <div className='image-profile'>
                  <img src={item.image}/>
                  <a>{item.title}</a>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Interest;
