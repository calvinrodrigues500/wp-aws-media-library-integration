import React from 'react'

const Dropdown = ({ name, options, value, onChange }) => {

  return (
    <div>
      <select
        id={name}
        className='
        w-full
        p-2
        rounded-md
        font-medium
        text-sm
        '
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
      >
        {
          options.map((item) => {
            return <option value={item.id}>{item.value}</option>
          })
        }
      </select>
    </div>
  )
}

export default Dropdown