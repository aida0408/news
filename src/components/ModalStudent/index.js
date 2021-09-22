import React from "react"
import Modal from "react-modal"
import FormInput from "../FormInput";
import Button from "../Button"
import {useForm} from "react-hook-form";

const ModalStudent = ({show, hide, onSubmit, item={}}) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            wight: '50%',
        },
    };
    const closeModal = () => {
        hide(false)
    }
    return(
       <Modal
           isOpen={show}
           onRequestClose={closeModal}
           style={customStyles}
           >
           <form onSubmit={handleSubmit(onSubmit)}>
               <div>
                   <FormInput
                   label="Введите имя"
                   name="name"
                   register={register}
                   errors={errors}
                   initialValue={item.name}
                   required
                   />
               </div>
               <div>
                   <FormInput
                       label="Введите номер"
                       name="phone"
                       register={register}
                       errors={errors}
                       initialValue={item.phone}
                       required
                   />
               </div>
               <div>
                   <FormInput
                       label="Контракт"
                       name="contract"
                       register={register}
                       errors={errors}
                       errorsMessage="Заполни меня"
                       initialValue={item.contract}
                       required
                   />
               </div>
           </form>
           <Button title="Сохранить"/>
       </Modal>
    )
}
export default ModalStudent