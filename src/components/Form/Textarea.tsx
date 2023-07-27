import {
  ForwardRefRenderFunction,
  TextareaHTMLAttributes,
  forwardRef,
} from 'react'

import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label?: string
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
}

const TextareaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = ({ label, error = undefined, name, ...rest }, ref) => {
  return (
    <div className={rest.className}>
      {!!label && <label htmlFor={name} className="text-gray-800">{label}</label>}
      <textarea
        name={name}
        id={name}
        ref={ref}
        {...rest}
        className="focus-within:border-[#022C54] bg-gray-100 resize-none p-2.5 w-full h-24 rounded-md px-3 mt-2 outline-none border-2 border-transparent text-gray-800"
      />
    </div>
  )
}

export const Textarea = forwardRef(TextareaBase)
