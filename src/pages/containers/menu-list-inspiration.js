import React from 'react';

function ListInspiration(props){
  const list = props.data.categories;
  return(
    <div className='container-menu'>
      <ul className="topic-list hidden-xs">
        {
          list.slice(0,5).map((item) => {
            return(
              <li key={item.id}>
                {/* <div className='list-image-inspiration'>
                  <img src={item.image}/>
                </div> */}
                <a>{item.title}</a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ListInspiration;
