import { useState, useCallback } from 'react';

export function usePhoneMask() {
  const [value, setValue] = useState('');

  const formatPhone = useCallback((input: string): string => {
    // Remove tudo que não é dígito
    const digits = input.replace(/\D/g, '');
    
    // Limita a 11 dígitos
    const limited = digits.slice(0, 11);
    
    // Aplica a máscara
    if (limited.length <= 2) {
      return limited;
    } else if (limited.length <= 6) {
      return `(${limited.slice(0, 2)}) ${limited.slice(2)}`;
    } else if (limited.length <= 10) {
      return `(${limited.slice(0, 2)}) ${limited.slice(2, 6)}-${limited.slice(6)}`;
    } else {
      return `(${limited.slice(0, 2)}) ${limited.slice(2, 7)}-${limited.slice(7)}`;
    }
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setValue(formatted);
  }, [formatPhone]);

  const setPhoneValue = useCallback((phone: string) => {
    setValue(formatPhone(phone));
  }, [formatPhone]);

  return {
    value,
    setValue: setPhoneValue,
    onChange: handleChange,
    rawValue: value.replace(/\D/g, ''),
  };
}
