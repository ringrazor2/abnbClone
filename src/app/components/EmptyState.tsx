"use client";

import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";
import useLoginModal from "../hooks/useLoginModal";

interface EmptyState {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyState> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filter",
  showReset,
}) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <div onClick={loginModal.onOpen} className="cursor-pointer">
        <Heading title={title} subtitle={subtitle} center />
      </div>
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
