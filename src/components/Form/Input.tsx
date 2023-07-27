import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react'

import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error = undefined, name, ...rest },
  ref,
) => {
  return (
    <div className={rest.className}>
      {!!label && <label htmlFor={name} className="text-gray-800">{label}</label>}
      <input
        name={name}
        id={name}
        ref={ref}
        {...rest}
        className="focus-within:border-[#022C54] bg-gray-100 h-12 w-full rounded-md px-3 mt-2 outline-none border-2 border-transparent text-gray-800"
      />
    </div>
  )
}

export const Input = forwardRef(InputBase)
