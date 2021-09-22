import React from "react"

const FormInput = ({label, name, register, required, errors, errorMessage, initialValue=""}) => {
   return (
       <>
           <label>{label}</label>
           <input type="text"
                  defaultValue={initialValue}
                  {...register(name, {required})}
           />
           {errors.name && <div>
               {errorMessage ? errorMessage : "Заполни это поле"}
           </div>
           }
       </>
);
};
export default FormInput