"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";

interface Props<T extends FieldValues> {
  startName: Path<T>;
  endName: Path<T>;
  label?: string;
  required?: boolean;
  labelClass?: string;
}

export function DateRangeField<T extends FieldValues>({
  startName,
  endName,
  label,
  required,
  labelClass,
}: Props<T>) {
  const { control, setValue, watch } = useFormContext<T>();

  const start = watch(startName) as Date | undefined;
  const end = watch(endName) as Date | undefined;

  return (
    <FormField
      control={control}
      name={startName}
      render={() => (
        <FormItem className="flex flex-col">
          {label && (
            <FormLabel htmlFor={String(startName)}>
              <span className={cn(labelClass, "text-gray-500")}>{label}</span>
              {/* {required && <span className="ml-1 text-red-500">*</span>} */}
            </FormLabel>
          )}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !start && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {start ? (
                  end ? (
                    <>
                      {format(start, "MMM d")} – {format(end, "MMM d")}
                    </>
                  ) : (
                    format(start, "MMM d")
                  )
                ) : (
                  <span>Pick dates</span>
                )}
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="range"
                numberOfMonths={2}
                selected={{ from: start, to: end }}
                onSelect={(range) => {
                  if (!range || !range.from) return;
                  setValue(startName, range.from as PathValue<T, Path<T>>, {
                    shouldValidate: true,
                  });

                  setValue(
                    endName,
                    (range.to ?? addDays(range.from, 1)) as PathValue<
                      T,
                      Path<T>
                    >,
                    { shouldValidate: true }
                  );
                }}
                disabled={(date) =>
                  date < new Date(new Date().setHours(0, 0, 0, 0))
                }
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
