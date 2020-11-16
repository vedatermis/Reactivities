import React from 'react';
import { DateTimePicker } from "react-widgets";
import { FieldRenderProps } from 'react-final-form'
import { Form, FormFieldProps, Label } from 'semantic-ui-react'

interface IProps extends FieldRenderProps<Date, HTMLTextAreaElement>, FormFieldProps {}

const DateInput: React.FC<IProps> = ({input, width, id = null, placeholder, date = false, time = false, meta: { touched, error }, ...rest }) => {
    return (
        <Form.Field error = {touched && !!error} width = { width }>
            <DateTimePicker placeholder = { placeholder } date = { date } time = { time } value = { input.value || null } onChange = { input.onChange } {...rest }/>
            {touched && error && (
                <Label basic color = "red">{ error }</Label>
            )}
        </Form.Field>
    )
}

export default DateInput
