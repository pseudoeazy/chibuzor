import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  totalPages: number;
  handleNext: () => void;
  handlePrevious: () => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  handleNext,
  handlePrevious,
}: Props) {
  return (
    <div className="flex items-center">
      <Button
        variant="outline"
        size="icon"
        onClick={handlePrevious}
        disabled={currentPage <= 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>{" "}
      <div className="w-full border h-1 bg-black mx-1"></div>
      <Button
        variant="outline"
        size="icon"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
