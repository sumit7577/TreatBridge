import { Dialog, Transition } from "@headlessui/react"
import React, { Dispatch, SetStateAction, Fragment } from "react"


interface ModalProps {
    title: string,
    description?: string
    open: boolean,
    setModal: Dispatch<SetStateAction<boolean>>,
    onSuccess: () => void,
    children?: React.ReactNode,
    button?: boolean
}
const Modal = (props: ModalProps) => {
    const { open, setModal, title, description, onSuccess, button, children } = props;
    return (
        <div className='relative flex'>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setModal(() => false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="bold-text text-xl mb-4"
                                    >
                                        {title}
                                    </Dialog.Title>
                                    {children}

                                    {button && <div className="flex items-center gap-8 mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={onSuccess}
                                        >
                                            Confirm
                                        </button>

                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                            onClick={() => setModal(() => false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                    }
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div >
    )
}
export default Modal;