import React,{useState} from 'react'
import TodoList from '../components/TodoList.js'
import Modal from '../components/Modal.js'

const Main = () => {
    const [modalVisible, setModalVisible] = useState(false)

    const openModal = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    return(
        <div className="main_wrapper">
            <div className="list_wrapper">
                <TodoList />
            </div>
            <div className="add_btn_wrapper">
                <button className="add_btn" onClick={openModal}>+</button>
            </div>
            {
                modalVisible && <Modal visible={modalVisible}
                                        closable={true}
                                        maskClosable={true}
                                        onClose={closeModal}>hi
                                </Modal>
            }
        </div>
    );
}
 
export default Main;