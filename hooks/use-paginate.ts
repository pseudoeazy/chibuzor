import React, { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function usePaginate<T>({ data }: { data: T[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2); // Number of items to display per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((page) => page + 1);
  };
  const handlePrevious = () => {
    setCurrentPage((page) => page - 1);
  };

  return {
    currentItems,
    currentPage,
    totalPages,
    handleNext,
    handlePrevious,
  };
}
