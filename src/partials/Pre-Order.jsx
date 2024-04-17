import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function PreOrder() {
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState("");

  const inputRef = useRef(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const submitEmail = async () => {
    window.open(
      "https://www.barnesandnoble.com/w/too-young-for-cancer-katie-coleman/1144947840;jsessionid=67C463F7B33D131B3D92A58D1DE5DE1C.prodny_store01-atgap16?ean=9781639109449&st=AFF&2sid=Random%20House%20Inc_8373827_NA&sourceId=AFFRandom%20House%20Inc",
      "_blank"
    );
    setOpen(false);
  };

  // This is a terrible navigation strategy, todo: rework it

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={inputRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 pb-32">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform bg-white overflow-hidden rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <button
                  className="absolute top-3 right-6 w-2"
                  onClick={() => setOpen(false)}
                >
                  <FontAwesomeIcon className="text-slate w-5 " icon={faXmark} />
                </button>
                <div className="flex flex-row w-full justify-between">
                  <div className="w-full">
                    <div>
                      <div>
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold  leading-6 text-gray-900"
                        >
                          📚 Pre-Orders Now Available!!
                        </Dialog.Title>
                        <div className="mt-2 text-left">
                          <p className="text-sm text-gray-500">
                            Pre-Orders are now available for my memoir, Too
                            Young For Cancer.
                          </p>
                          <p className="text-sm text-gray-500">
                            I'm donating my portion of the proceeds from it back
                            to research.
                          </p>
                          <p className="text-sm text-gray-500">
                            Let's make an impact, together!
                          </p>
                          {/* <p className="text-xs font-thin text-gray-500">
                            (click outside window to close w/o subscribing)
                          </p> */}
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={submitEmail}
                      >
                        Pre-Order Your Copy!
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default PreOrder;
