import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { ReactNode } from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import { TbCloudUpload } from "react-icons/tb";
import { LoadingSpinner } from "./loading-spinner";

type TextFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  type?: "text" | "email" | "number" | "password" | "file" | "tags" | "time";
  placeholder?: string;
  required?: boolean;
  action?: () => void;
  icon?: ReactNode;
  loading?: boolean;
  className?: string;
  inputClass?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: (value: any) => void;
  labelClass?: string;
  countryLog?: boolean;
  multiple?: boolean;
};

export const TextField = <T extends FieldValues>({
  name,
  label,
  type = "text",
  placeholder = "Input",
  required = false,
  action,
  icon = <X size={16} className="text-muted-foreground" />,
  loading,
  className,
  inputClass,
  disabled = false,
  readOnly,
  onChange,
  labelClass = "text-white",
  countryLog,
  multiple,
}: TextFieldProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(className)}>
          {label && (
            <FormLabel htmlFor={name}>
              <span className={cn(labelClass, "text-gray-900")}>{label}</span>
              {required && <span className="ml-1 text-red-500">*</span>}
            </FormLabel>
          )}

          <FormControl>
            <div className="relative flex items-center gap-2">
              {/* -------------- TAG INPUT START -------------- */}
              {type === "tags" ? (
                <div className="flex flex-wrap items-center gap-2 border rounded px-2 py-1 min-h-[45px] w-full">
                  {/* Show added tags */}
                  {Array.isArray(field.value) &&
                    field.value.map((tag: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-center bg-gray-200 text-gray-800 px-2 py-1 rounded"
                      >
                        <span>{tag}</span>
                        <button
                          type="button"
                          className="ml-1 text-gray-700 hover:text-red-600"
                          onClick={() => {
                            const updated = field.value.filter(
                              (_: string, index: number) => index !== i
                            );
                            field.onChange(updated);
                            onChange?.(updated);
                          }}
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}

                  {/* Input field for typing tags */}
                  <input
                    className="flex-1 bg-transparent outline-none py-1"
                    placeholder={placeholder}
                    disabled={disabled}
                    readOnly={readOnly}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === ",") {
                        e.preventDefault();
                        const newTag = e.currentTarget.value.trim();
                        if (newTag) {
                          const updated = [...(field.value || []), newTag];
                          field.onChange(updated);
                          onChange?.(updated);
                        }
                        e.currentTarget.value = "";
                      }
                    }}
                  />
                </div>
              ) : null}
              {/* -------------- TAG INPUT END -------------- */}

              {/* -------- OTHER INPUT TYPES -------- */}
              {type !== "tags" && (
                <>
                  {type === "file" ? (
                    <>
                      <Input
                        type="file"
                        id={name}
                        className="hidden"
                        disabled={disabled}
                        readOnly={readOnly}
                        multiple={multiple}
                        ref={(e) => {
                          field.ref(e);
                        }}
                        onChange={(e) => {
                          const files = e.target.files
                            ? Array.from(e.target.files)
                            : [];
                          field.onChange(files);
                          onChange?.(files);
                        }}
                        name={field.name}
                      />

                      <div
                        className={cn(
                          " flex items-center justify-center cursor-pointer",
                          !field.value && "border border-gray-400 rounded"
                        )}
                        onClick={() => {
                          const input = document.getElementById(
                            name
                          ) as HTMLInputElement;
                          input?.click();
                        }}
                      >
                        <span className="flex items-center gap-2 bg-gray-700 text-white px-4 py-1 rounded-lg">
                          <TbCloudUpload /> Upload
                        </span>
                      </div>

                      {field.value && (
                        <span className="text-sm text-gray-600 truncate bg-red-600">
                          {(field.value as File).name}
                        </span>
                      )}
                    </>
                  ) : (
                    <>
                      {countryLog && (
                        <div className="bg-gray-10 absolute bottom-1.5 text-gray-500 border-r px-2">
                          +88
                        </div>
                      )}

                      <Input
                        {...field}
                        type={type}
                        placeholder={placeholder}
                        className={cn(`${inputClass}`, action && "pr-12")}
                        id={name}
                        multiple={multiple}
                        disabled={disabled}
                        readOnly={readOnly}
                        onChange={(e) => {
                          field.onChange(e);
                          onChange?.(e.target.value);
                        }}
                      />
                    </>
                  )}
                </>
              )}

              {loading && <LoadingSpinner className="absolute right-4" />}

              {action && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={action}
                  type="button"
                  className="absolute right-0.5 top-0.5"
                >
                  {icon}
                </Button>
              )}
            </div>
          </FormControl>

          <FormMessage className="line-clamp-1 text-xs" />
        </FormItem>
      )}
    />
  );
};

TextField.displayName = "TextField";
