import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

export const ConfirmDialog = ({
  trigger,
  title,
  description,
  confirmBtn,
}: {
  trigger: React.ReactNode;
  title: string;
  description: string;
  confirmBtn: React.ReactNode;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="flex justify-end">{confirmBtn}</div>
      </DialogContent>
    </Dialog>
  );
};
