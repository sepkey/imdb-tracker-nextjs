'use client';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

export default function Searchbox() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    setSearch('');
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl m-auto justify-between items-center px-5 mt-4"
    >
      <div className="border rounded-md border-slate-300 w-full flex p-1 pl-4 ">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search keywords..."
          className="w-full  rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1 "
        />
        <button
          type="submit"
          disabled={!search}
          className="bg-emerald-200 font-semibold rounded-md px-3 py-2  disabled:text-gray-900 cursor-pointer"
        >
          Search Movie
        </button>
      </div>
    </form>
  );
}
