import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";

interface AddButtonProps {
  label: string;
  onClick?: () => void;
}

export const AddButton = ({ label, onClick }: AddButtonProps) => (
  <Button
    variant="ghost"
    size="sm"
    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
    onClick={onClick}
  >
    <Plus size={16} className="mr-1" />
    {label}
  </Button>
);

interface StatusBadgeProps {
  status: "verified" | "pending" | "notifications";
  children: React.ReactNode;
}

export const StatusBadge = ({ status, children }: StatusBadgeProps) => {
  const variants = {
    verified: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    notifications: "bg-green-100 text-green-700",
  };

  return (
    <span className={`text-xs px-2 py-1 rounded ${variants[status]}`}>
      {children}
    </span>
  );
};
