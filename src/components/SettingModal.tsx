import { Dialog, Tab, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { APIManager } from '../api/manager'

type SettingModalProps = {
    isOpen: boolean,
    closeModal: () => void
}

export default function SettingModal({ isOpen, closeModal }: SettingModalProps) {

    const [opacity, setOpacity] = useState(0)

    return (
        <>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-30" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-3xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 p-4 text-gray-900 shadow"
                                >
                                    Setting
                                </Dialog.Title>
                                <Tab.Group>
                                    <Tab.List as={'div'} className="w-full flex">
                                        <Tab className={({ selected }) =>
                                            'w-1/2 p-2 rounded-t border' + (selected ? 'shadow' : '')
                                        }>API Options</Tab>
                                        <Tab className={({ selected }) =>
                                            'w-1/2 p-2 rounded-t border' + (selected ? 'shadow' : '')
                                        }>Site setting</Tab>
                                    </Tab.List>
                                    <Tab.Panels>
                                        <Tab.Panel>{APIManager.getProvider().getOptionComponent()()}</Tab.Panel>
                                        <Tab.Panel>
                                            <div className="p-4 relative">
                                                <label htmlFor="customRange1" className="form-label">Time list opacity ({opacity}%)</label>
                                                <input
                                                    type="range"
                                                    className=" form-range appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                                                    id="customRange1"
                                                    min="0"
                                                    value={opacity}
                                                    onChange={e => setOpacity(parseInt(e.currentTarget.value))}
                                                    max="100"
                                                />
                                            </div>
                                        </Tab.Panel>
                                    </Tab.Panels>
                                </Tab.Group>
                                <div className="mt-4 flex justify-end p-2 border-t border-gray-200">
                                    <button
                                        type="button"
                                        className="focus:outline-none bg-red-200 py-1 px-4 text-red-700 text-sm font-semibold rounded"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
