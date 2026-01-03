import { cn } from "@/lib/utils";

const MainContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full mx-auto px-3 lg:px-8 max-w-[1280px] xl:max-w-[1440px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MainContainer;
