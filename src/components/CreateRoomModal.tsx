import React, { useState } from "react";

export type CreateRoomModalProps = {
    open?: boolean;
    onClose?: () => void;
};

const CreateRoomModal = ({
    open,
    onClose,
}: CreateRoomModalProps) => {
    const [isCreating, setIsCreating] = useState(false);
    const [form, setForm] = useState({
        name: "",
        password: "",
    })

    const handleCreateClick = async () => {
        const room = {
            ...form,
            players: [{
                id: "1",
                option: "x"
            }]
        }
        setIsCreating(true)
        await fetch("/api/room", {
            body: JSON.stringify(room),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        })
        setIsCreating(false)
    }

    const handleCancelClick = () => {
        onClose && onClose();
    }

    return open ? (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" onClick={handleCancelClick}></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-base font-semibold leading-6 text-white" id="modal-title">Create Room</h3>
                                <div className="mt-2 flex flex-col gap-4">
                                    <div>
                                        <label htmlFor="roomName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room Name</label>
                                        <input
                                            type="text"
                                            name="roomName"
                                            id="roomName"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="room name"
                                            required
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            id="password"
                                            placeholder="••••••••"
                                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={handleCreateClick}
                            >
                                Create
                            </button>
                            <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={handleCancelClick}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : <React.Fragment />
}

export default CreateRoomModal