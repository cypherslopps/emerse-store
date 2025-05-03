import { clsx, type ClassValue } from "clsx"
import { FormikProps } from "formik";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFieldError<T>(
  formik: FormikProps<T>, 
  field: keyof T
) {
  const isTouched = formik.touched[field] === undefined ? false : formik.touched[field];
  const error = formik.errors[field];

  return ({
      isInvalid: isTouched && !!error,
      message: isTouched && error ? error : ""
  })
}
