import { Room } from "@/models/Room";
import { useState } from "react";
import CreateRoomModal from "./CreateRoomModal";
import JoinRoomModal from "./JoinRoomModal";

export type RoomListProps = {
    rooms: Room[];
};

const RoomList = ({
    rooms,
}: RoomListProps) => {
    const [isOpenCreateRoomModal, setIsOpenCreateRoomModal] = useState(false);
    const [isOpenJoinRoomModal, setIsOpenJoinRoomModal] = useState(false);
    return (
        <>
            <div className="text-gray-50 p-20">
                <h1 className="text-3xl mb-12 flex justify-between items-center">
                    <span>Room List</span>
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setIsOpenCreateRoomModal(true)}
                    >
                        Create Room
                    </button>
                </h1>
                <ul className="flex flex-col gap-2">
                    {rooms.map((room, index) => (

                        <li
                            className="text-xl bg-gray-700 p-2 rounded cursor-pointer hover:bg-gray-600"
                            key={room.id}
                            onClick={() => setIsOpenJoinRoomModal(true)}
                        >
                            <span className="text-m text-gray-400">{index + 1}. </span>
                            {room.name}
                        </li>
                    ))}
                </ul>
            </div>
            <CreateRoomModal open={isOpenCreateRoomModal} onClose={() => setIsOpenCreateRoomModal(false)} />
            <JoinRoomModal open={isOpenJoinRoomModal} onClose={() => setIsOpenJoinRoomModal(false)} />
        </>
    );
}

export default RoomList;