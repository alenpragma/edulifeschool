import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CustomButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <Button
      size="lg"
      className={cn(
        "group relative overflow-hidden rounded-lg bg-primary px-8 cursor-pointer py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105",
        className
      )}
    >
      <span className="relative z-10">{text}</span>
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Button>
  );
}
