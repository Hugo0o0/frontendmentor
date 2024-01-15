import { Transition } from "@headlessui/react";

const Fade = ({ children }: { children: React.ReactNode }) => {
  return (
    <Transition
      enter="transition duration-100 ease-out"
      enterFrom="opacity-0 translate-y-1/2"
      enterTo="opacity-100 "
      leave="transition duration-75 ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0  -translate-y-1/2"
    >
      {children}
    </Transition>
  );
};

export default Fade;
