import { useState } from 'react';
import { TableDataItem } from '../../interfaces/interfaces';
import { BsPencilSquare } from 'react-icons/bs';
import { ModalWindow } from '../ModalWindow/ModalWindow';

export const Table = ({ dataList }: { dataList: TableDataItem[] }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [itemData, setItemData] = useState<TableDataItem | null>(null);

    const openModal = (item: TableDataItem) => {
        setIsOpen(true);
        setItemData(item);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div className="overflow-x-auto">
            <table className="mx-auto">
                <thead>
                    <tr className="bg-gray-400 font-bold text-center">
                        <td className="px-6 py-4 border"></td>
                        <td className="px-6 py-4 border">Name</td>
                        <td className="px-6 py-4 border">Email</td>
                        <td className="px-6 py-4 border">Phone number</td>
                        <td className="px-6 py-4 border">Birthday date</td>
                        <td className="px-6 py-4 border">Adress</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataList.map((item: TableDataItem) =>
                            <tr key={item.id} className="hover:bg-gray-100"
                            >
                                <td
                                    className="px-6 py-4 border cursor-pointer hover:bg-gray-300"
                                    data-field="name"
                                    onClick={() => openModal(item)}
                                >
                                    <BsPencilSquare />
                                </td>
                                <td className="px-6 py-4 border" data-field="name">{item.name}</td>
                                <td className="px-6 py-4 border" data-field="email">{item.email}</td>
                                <td className="px-6 py-4 border" data-field="phone_number">{item.phone_number}</td>
                                <td className="px-6 py-4 border" data-field="birthday_date">{item.birthday_date}</td>
                                <td className="px-6 py-4 border" data-field="address">{item.address}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <ModalWindow 
                modalIsOpen={modalIsOpen}  
                closeModal={closeModal}
                item={itemData} 
            />
        </div>
    )
}