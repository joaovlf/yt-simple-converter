import { useState } from "react";

export const UseMountModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = (toggle?: boolean | null): void => {
    setShowModal(toggle ?? !showModal);
  };

  return { handleModal, showModal };
};
