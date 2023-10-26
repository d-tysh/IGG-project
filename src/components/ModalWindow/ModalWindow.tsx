import Modal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { selectItemLoading } from '../../redux/table/selectors';
import { Loader } from '../Loader/Loader';
import { EditItemForm } from '../Forms/EditItemForm';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

type ModalProps = {
    modalIsOpen: boolean, 
    closeModal: () => void,
}

export const ModalWindow = ({modalIsOpen, closeModal}: ModalProps) => {
    const itemLoading = useSelector(selectItemLoading);

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Edit Modal"
        >
            <button onClick={closeModal}>
                <FaWindowClose className='h-30 w-30 hover:fill-red-500'/>
            </button>
            <h2 className='text-center text-lg font-semibold mb-2'>Edit data</h2>
            {
                itemLoading && <Loader />
            }
            {
                !itemLoading && <EditItemForm closeModal={closeModal} />
            }
        </Modal>
    )
}