import { TextField } from '@material-ui/core';
import { useField } from '@unform/core';
import { useEffect, useRef } from 'react';
import InputMask from 'react-input-mask';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const {
    fieldName,
    registerField,
    defaultValue,
    error,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'children[1].firstChild.value',
    });
  }, [fieldName, registerField]);

  return rest.mask ? (
    <InputMask
      mask={rest.mask}
      disabled={false}
      {...rest}
    >
      <TextField
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
        // eslint-disable-next-line no-unneeded-ternary
        error={error ? true : false}
        helperText={error}
      />
    </InputMask>
  ) : (
    <TextField
      ref={inputRef}
      defaultValue={defaultValue}
      {...rest}
      // eslint-disable-next-line no-unneeded-ternary
      error={error ? true : false}
      helperText={error}
    />
  );

  // return (
  //   <TextField name={name} ref={inputRef} defaultValue={defaultValue} {...rest} />
  // );
}
