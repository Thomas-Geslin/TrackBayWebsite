'use client';

import { useEffect, useState } from 'react';
import { useModal } from '../providers/ModalProvider';
import AppStoreModal from './AppStoreModal';

export default function AppStoreModalMount() {
  const { isOpen, closeModal } = useModal();
  const [mounted, setMounted] = useState(false);

  // Avoid SSR/DOM mismatches before document is available
  useEffect(() => setMounted(true), []);
  if (!mounted || !isOpen) return null;

  return <AppStoreModal onClose={closeModal} />;
}
