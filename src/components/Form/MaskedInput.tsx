import { ForwardRefRenderFunction, forwardRef } from 'react'

import ReactInputMask from 'react-input-mask'

import { InputProps } from './Input'

interface MaskedInputProps extends InputProps {
  mask: string
}

const BaseMaskedInput: ForwardRefRenderFunction<
  HTMLInputElement,
  MaskedInputProps
> = ({ label, error = undefined, name, mask, ...rest }, ref) => {
  return (
    <div className={rest.className}>
      {!!label && <label htmlFor={name} className="text-gray-800">{label}</label>}
      <ReactInputMask
        name={name}
        mask={mask}
        id={name}
        inputRef={ref}
        {...rest}
        className="focus-within:border-[#022C54] bg-gray-100 h-12 w-full rounded-md px-3 mt-2 outline-none border-2 border-transparent text-gray-800"
      />
    </div>
  )
}

export const MaskedInput = forwardRef(BaseMaskedInput)
