'use client';
import { IWatchedMovie } from '@/types/types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type LocalStorageStateHook<T> = [T, Dispatch<SetStateAction<T>>];

export function useLocalStorage(
  initialState: IWatchedMovie[],
  key: string
): LocalStorageStateHook<IWatchedMovie[]> {
  const [value, setValue] = useState<IWatchedMovie[]>(() => {
    if (typeof window !== 'undefined') {
      const storageValue = window.localStorage.getItem(key);
      return storageValue ? JSON.parse(storageValue) : initialState;
    }
    return initialState;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
