import React from 'react'
import MenuModal from '../MenuModal/MenuModal'

function MenuList({value, onChange}) {
    // Destructure value
    const {basePeople, menuItems} = value;

    const handleDataFromModal = (getData) => {
        // Update the menu list data
        onChange({
            basePeople: getData.people,
            menuItems: [...menuItems, {
                menuName: getData.menuName,
                price: parseFloat(getData.price),
                choosePeople: getData.choosePeople
            }]
        });
    };

    return (
        <>
            <div className='flex'>
                <div className='flex-4 text-left'>ชื่อรายการ</div>
                <div className='flex-1 text-right'>ราคา</div>
                <div className='flex-1 text-right'>คนละ</div>
                <div className='pl-2 text-right'>...</div>
            </div>
            <div>
                {menuItems.map((item, index) => (
                    <div key={index}>
                        <div className="flex">
                            <div className='flex-4 text-left'>{item.menuName}</div>
                            <div className='flex-1 text-right'>{item.price}</div>
                            <div className='flex-1 text-right'>{(item.price / (item.choosePeople.length > 0 ? item.choosePeople.length : 1)).toFixed(2)}</div>
                            <div className='pl-2 text-right'>...</div>
                        </div>
                        <div className='flex gap-2'>
                            {item.choosePeople.map((p, idx) => (
                                <span key={idx} className="badge badge-secondary">{p}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className='border-t-2 border-black mt-2 mb-2 pt-2 pb-2'>
            </div>
            <div className='flex mb-5'>
                <MenuModal sendData={handleDataFromModal} getBasePeople={basePeople}/>
            </div>
            <div className='flex'>
                <button>ลบทั้งหมด</button>
            </div>
        </>
    )
}

export default MenuList