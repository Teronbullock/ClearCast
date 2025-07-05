'use client';

import { useState } from 'react';

export const useHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileMenuStateHandler = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  return { mobileMenuStateHandler, isMenuOpen };
};
