import React, { useState } from 'react'
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { QueryClient } from "@tanstack/react-query";

import { signupSchema } from '@/lib/schemas/auth.schema';
import { getFieldError } from '@/lib/utils';
import { z } from 'zod';

type FormValues = z.infer<typeof signupSchema>;


const useSignupForm = () => {
    const queryClient = new QueryClient();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    
    const formik = useFormik<FormValues>({
        initialValues: {
            name: "",
            email: "",
            phone_no: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: toFormikValidationSchema(signupSchema),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            try {
                setIsLoading(true)
                console.log(values, "submitted");
            } catch (err) {
                // 
            } finally {
                setIsLoading(false);
            }
        }
    });
    const errors = {
        name: getFieldError<FormValues>(formik, "name"),
        email: getFieldError<FormValues>(formik, "email"),
        phone_no: getFieldError<FormValues>(formik, "phone_no"),
        password: getFieldError<FormValues>(formik, "password"),
        confirmPassword: getFieldError<FormValues>(formik, "confirmPassword"),
    }
    const isValid = !formik.isValid || !formik.dirty || formik.isSubmitting;

    return {
        isLoading,
        formik,
        isValid,
        errors
    }
}

export default useSignupForm