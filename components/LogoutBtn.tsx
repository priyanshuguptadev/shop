"use client";
import { ConfirmDialog } from "./ConfirmDialog";
import { Button } from "./ui/button";
import { SignOutButton } from "@clerk/nextjs";

export const LogOutBtn = () => {
  return (
    <ConfirmDialog
      trigger={<Button variant="outline">Log Out</Button>}
      title="Confirm Log Out"
      description="Are you sure you want to log out?"
      confirmBtn={
        <Button variant="destructive" asChild>
          <SignOutButton>Confirm</SignOutButton>
        </Button>
      }
    />
  );
};
