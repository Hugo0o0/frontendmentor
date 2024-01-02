import Loader from "@/components/Loader/Loader";
import Modal from "@/components/Modal/Modal";
import React from "react";

const LoadingModal = () => {
  return (
    <Modal>
      <Loader />
    </Modal>
  );
};

export default LoadingModal;
