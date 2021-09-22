import React, {useEffect, useState} from 'react'
import axios from "axios";
import StudentItem from "../../components/StudentItem";
import Button from "../../components/Button"
import ModalStudent from "../../components/ModalStudent";

const Students = () => {
    const [students, setStudents] = useState([])
    const [showModal, setShowModal] = useState(false)

    const sendData = (data) => {
        axios.post("https://611675ae1c592d0017bb7f0d.mockapi.io/students", data)
            .then(({data: student}) => {
                setStudents([...students, student])
                setShowModal(false)
            })
    }
    const deleteStudent = (id) => {
        axios.delete(`https://611675ae1c592d0017bb7f0d.mockapi.io/students/${id}`)
            .then(() => setStudents(students.filter(item => item.id !== id)))
    }
    const updateStudent = (id, obj) => {
        axios.put(`https://611675ae1c592d0017bb7f0d.mockapi.io/students/${id}`, obj)
            .then(() => setStudents(students.map(el => el.id === id ? {...el, ...obj} : el)))
    }

useEffect(() => {
    axios("https://611675ae1c592d0017bb7f0d.mockapi.io/students")
        .then(({data}) => setStudents(data))
}, [])
return (
    <div className="container">
        <table className="table">
            <tr>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">ИМЯ</th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">ТЕЛЕФОН</th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">СУММА
                    КОНТРАКТА
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">ОПЛАТИЛ</th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">НОУТБУК</th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">ГРУППА</th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">КОММЕНТАРИЙ</th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">СТАТУС</th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">ACTIONS</th>
            </tr>
            {
                students.map((item, idx) =>
                    <StudentItem
                        key={item.id}
                        item={item} idx={idx}
                        deleteStudent={deleteStudent}
                        updateStudent={updateStudent}
                    />)
            }
        </table>
        <Button onClick={() => setShowModal(true)}
                title="Добавить нового студента"/>
        <ModalStudent
            show={showModal}k
            hide={setShowModal}
            onSubmit={sendData}
        />
    </div>
)
}

export default Students