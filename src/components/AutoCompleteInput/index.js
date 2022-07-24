import React from 'react'
import Autocomplete from 'react-autocomplete'

import './index.scss'
function AutoCompleteInput({ onChange, onSelect, options }) {
  return (
    <div className="auto-complete-wrapper">
      <Autocomplete
        wrapperStyle={{ display: 'block' }}
        getItemValue={(item) => item}
        items={options}
        style={{ border: 'none' }}
        renderItem={(item, isHighlighted) => (
          <div
            style={{ background: isHighlighted ? 'lightgray' : 'white' }}
            className="d-flex px-3 py-2"
          >
            <img
              src={item.image}
              alt={`${item.name}`}
              style={{
                width: 30,
                height: 30,
                objectFit: 'contain',
                marginRight: 20,
              }}
            />
            <p>
              {item.name} | Stock : {item.stock} | Price : {item.price}
            </p>
          </div>
        )}
        onChange={onChange}
        onSelect={onSelect}
      />
    </div>
  )
}

export default AutoCompleteInput
