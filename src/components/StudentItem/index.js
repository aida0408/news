import React, {useState} from "react"
import Button from "../Button"
import ModalStudent from "../ModalStudent";


const StudentItem = ({item, idx, deleteStudent, updateStudent}) => {
    const [showModal, setShowModal] = useState(false)
    const closeModal = () => {
        setShowModal(false)
    }
    const saveData = (data) => {
        updateStudent(item.id, data)
        closeModal()
    }
    return (
        <tr className="hover:bg-grey-lighter">
            <td className="py-4 px-6 border-b border-grey-light">{item.name}</td>
            <td className="py-4 px-6 border-b border-grey-light">{item.phone}</td>
            <td className="py-4 px-6 border-b border-grey-light">{item.contract}</td>
            <td className="py-4 px-6 border-b border-grey-light">{item.paid}</td>
            <td className="py-4 px-6 border-b border-grey-light">{item.notebook}</td>
            <td className="py-4 px-6 border-b border-grey-light">{item.group}</td>
            <td className="py-4 px-6 border-b border-grey-light">{item.status}</td>
            <td className="py-4 px-6 border-b border-grey-light">
                {item.actions}
                <div>
                    <Button title="Edit" onClick={() => setShowModal(true)} />
                    < Button title="Delete" onClick={() => deleteStudent(item.id)}/>
                </div>
                <ModalStudent
                    show={showModal}
                    hide={setShowModal}
                    item={item}
                    onSubmit={saveData}
                    />
            </td>
        </tr>
    )
}

export default StudentItem