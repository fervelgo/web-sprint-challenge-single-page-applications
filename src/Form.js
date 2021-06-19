import React from 'react'

export default function Form(props) {
    const {
        values,
        change,
        submit,
        disabled,
        errors
    } = props

    const onSubmit = (evt) => {
        evt.preventDefault() //repasar porqué pasaba. Tests the understanding.
        submit()
    }

    const onChange = (evt) => {
        const { name, value, checked, type} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <div>
            <h1>Build your own Pizza</h1>

            <label> Enter your Name
                <input
                    value={values.username}
                    onChange={onChange}
                    name='name-input'
                    type='text'
                />

            </label>

            <label>Choose the Size
                <select
                onChange={onChange}
                value={values.size}
                name='size-dropdown'
                >
                <option value=''>-Select a Size Please- </option>
                <option value='small'> Small </option>
                <option value='medium'> Medium </option>
                <option value='large'> Large </option>

                </select>
            </label>
        <div className='topping-checkboxes'>
            <h4>Choose Your Toppings</h4>
                <label>Pepperoni
                    <input
                    type='checkbox'
                    name='Pepperoni'
                    checked={values.pepperoni}
                    onChange={onChange}
                    />
                </label>
                <label>Bacon
                    <input
                    type='checkbox'
                    name='extra-cheese'
                    checked={values.bacon}
                    onChange={onChange}
                    />
                </label>
                <label>Artichoke
                    <input
                    type='checkbox'
                    name='artichoke'
                    checked={values.artichoke}
                    onChange={onChange}
                    />
                </label>
                <label>Mushrooms
                    <input
                    type='checkbox'
                    name='mushrooms'
                    checked={values.mushrooms}
                    onChange={onChange}
                    />
                </label>
      </div>

      <label> Special Instructions
          <input
            type='text'
            name='special-text'
            maxLength='35'
            value={values.specialText}
            onChange={onChange}

          />
      </label>

        <button id='order-button'>Order My Pizza!</button>

      </div>
        </form>

    )

}