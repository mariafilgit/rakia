import { FC } from 'react';
import { FormErrorProps } from './FormError.types';

export const FormError: FC<FormErrorProps> = ({ text }) => {
  return <p className="h-8 text-xs text-red-600 space-y-1">{text}</p>;
};
