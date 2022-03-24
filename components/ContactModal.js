import { Dialog, Transition } from '@headlessui/react';
import { InformationCircleIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';

const ContactModal = ({ isOpen, closeModal }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              show={isOpen}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            />

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="flex items-center text-lg font-medium leading-6 text-gray-900"
                >
                  <InformationCircleIcon className="w-5 h-5 mr-1 text-red-600" />
                  App information
                </Dialog.Title>
                <Dialog.Description className="mt-2">
                  <p className="text-sm text-gray-500">
                    Remember that our developer created this app as a DEMO to
                    help students achieve the main functionality of their final
                    project. Therefore, functionality is limited
                  </p>
                </Dialog.Description>

                <div className="mt-4 space-x-3">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md bg-secondary-brand-dark text-primary-brand-light hover:bg-secondary-brand-light focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-brand-dark"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>

                  <a
                    href="https://github.com/MartinIsProgramming"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-100 border border-transparent rounded-md bg-primary-brand-dark hover:bg-primary-brand-light focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-brand-dark"
                  >
                    Meet the dev!
                  </a>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ContactModal;
