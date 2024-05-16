import React from 'react'

const Dropdown = ({ name, style, options, intialValue }) => {

  return (
    <div>
      <select
        id={name}
        className='bg-gray-50
        border
        border-gray-300
        text-gray-900
        text-sm rounded-lg
        p-2.5
        dark:bg-gray-700
        dark:border-gray-600
        dark:placeholder-gray-400
        dark:text-white
        dark:focus:ring-blue-500
        dark:focus:border-blue-500
        outline-none
        focus:outline-none
        focus:border-none
        !pr-10'
      >
        <option selected>
          {intialValue}
        </option>

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