import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { E164Number } from "libphonenumber-js/core";
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
import {FromFieldType} from "./PatientForm"
import Image from "next/image"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";




interface CustomProps {
  control: Control<any>,
  fieldType: FromFieldType,
  name: string,
  placeholder?: string,
  label?: string,
  iconSrc?: string,
  iconAlt?: string,
  disabled?: boolean,
  dataFormat?: string,
  showTimeSelect?: boolean,
  children?: React.ReactNode,
  renderSkeleton?: (field:any) => React.ReactNode

}

const RenderInput = ({field, props}: {field: any, props: CustomProps})=>{
    switch (props.fieldType) {
      case FromFieldType.INPUT:
        return (
          <div className="flex rounded-md border border-dark-500 bg-dark-400">
            {props.iconSrc && (
              <Image src={props.iconSrc} alt="user" width={24} height={24} className="ml-2" />
            )}
            <FormControl>
              <Input placeholder={props.placeholder}  {...field} className="shad-input border-0" />
            </FormControl>
          </div>
        )
        case FromFieldType.PHONE_INPUT:
          return (
              <FormControl>
                <PhoneInput
                  defaultCountry="US"
                  placeholder={props.placeholder}
                  {...field}
                  international
                  withCountryCallingCode
                  value={field.value as E164Number | undefined}
                  onChange={field.onChange}
                  className="input-phone bg-black text-dark-600 "
                />
              </FormControl>
          )
          case FromFieldType.DATE_PICKER:
              return (
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                  <Image
                    src="/assets/icons/calendar.svg"
                    height={24}
                    width={24}
                    alt="user"
                    className="ml-2"
                  />
                    <FormControl>
                      <DatePicker
                          timeInputLabel="Time:"
                          selected={field.value}
                          onChange={(date) => field.onChange(date)}
                          dateFormat={props.dataFormat ?? "MM/dd/yyyy"}
                          wrapperClassName="date-picker"
                          showTimeSelect={props.showTimeSelect ?? false}
                        />
                    </FormControl>
                </div>
              )
              case FromFieldType.SKELETON:
                return props.renderSkeleton ? props.renderSkeleton(field) : null
              case FromFieldType.SELECT:
                 return (
                   <FormControl>
                      <Select onOpenChange={field.onChange} defaultOpen={field.value}  >
                        <FormControl>
                          <SelectTrigger className="shad-select-trigger" >
                            <SelectValue placeholder={props.placeholder} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="shad-select-content" >
                          {props.children}
                        </SelectContent>
                      </Select>
                   </FormControl>
                 )
                 case FromFieldType.TEXTAREA:
                  return (
                    <FormControl>
                      <Textarea placeholder={props.placeholder} {...field} >
                        {props.disabled}
                      </Textarea>
                    </FormControl>
                  )
                  case FromFieldType.CHECKBOX:
                    return (
                      <FormControl>
                      <div className="flex items-center gap-4">
                        <Checkbox id={props.name} checked={field.value} onCheckedChange={field.onChange} />
                        <Label htmlFor={props.name}>{props.label}</Label>
                      </div>
                    </FormControl>
                    )
        default:
        break;
    }
}
const CustomFrom = (props: CustomProps ) => {
    const {control , fieldType , name , label } = props
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex-1" >
            {fieldType !== FromFieldType.CHECKBOX && label && (
              <FormLabel className="shad-input-label" >{label}</FormLabel>
            )}

            <RenderInput field={field} props={props} />
            <FormMessage className="shad-error" />

          </FormItem>
        )}
      />
  )
}

export default CustomFrom


