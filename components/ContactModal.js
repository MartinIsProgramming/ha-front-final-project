import { Dialog, Transition } from '@headlessui/react';
import { InformationCircleIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import StandardBtn from './shared/StandardBtn';

const ContactModal = ({ isOpen, closeModal }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto top-52"
        open={isOpen}
        onClose={closeModal}
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />
        <div className="min-h-screen px-4 text-center">
          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <Dialog.Title
              as="h3"
              className="flex items-center justify-center text-lg font-medium leading-6 text-gray-900 sm:justify-start"
            >
              <InformationCircleIcon className="w-5 h-5 mr-1 text-red-600" />
              App information
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-center text-gray-500 sm:text-left">
              Remember that our developer created this app as a DEMO to help
              students achieve the main functionality of their final project.
              Therefore, functionality is limited
            </Dialog.Description>

            <div className="mt-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
              <StandardBtn
                text="Got it, thanks!"
                onClick={closeModal}
                customClasses="w-full sm:w-auto"
              />
              <StandardBtn
                text="Meet the dev!"
                href="https://github.com/MartinIsProgramming"
                isSecondary
                isExternalLink
              />
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContactModal;
