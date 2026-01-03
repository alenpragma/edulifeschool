import { FieldValues, Path, useFormContext } from "react-hook-form";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

interface Props<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  labelClass?: string;
  onChange?: (date: Date | undefined) => void;
}

export const DateField = <T extends FieldValues>({
  name,
  label,
  required = false,
  disabled = false,
  labelClass,
  onChange,
}: Props<T>) => {
  const { control } = useFormContext<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          {label && (
            <FormLabel htmlFor={name} className={cn(labelClass)}>
              <span>{label}</span>
              {required && <span className="ml-1 text-red-500">*</span>}
            </FormLabel>
          )}
          <DateTimePicker
            disabled={disabled}
            value={field.value}
            onChange={(value) => {
              field.onChange(value);
              if (onChange) {
                onChange(value);
              }
            }}
            granularity="day"
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

DateField.displayName = "DateField";
