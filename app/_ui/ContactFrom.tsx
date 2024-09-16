"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

// form zod shema validation
const formSchema = z.object({
  fullname: z.string().min(3).max(50),
  companyname: z.string().min(3).max(50),
  phone: z.string().min(10).regex(phoneRegex, "Invalid Number!"),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
  servicename: z.string(),
});

export default function ContactFrom() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      companyname: "",
    },
  });
  ``;
  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      alert("Email sent successfully!");
    } else {
      alert("Error sending email.");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-10'>
        <div className='flex flex-col md:flex-row gap-10 md:items-center'>
          <FormField
            control={form.control}
            name='fullname'
            render={({ field }) => (
              <FormItem className='flex-1'>
                {/* <FormLabel className='text-md'>Full Name</FormLabel> */}
                <FormControl>
                  <Input
                    className=' h-12 text-base  border-b-2 !border-gray-600'
                    placeholder='Enter Your Name...'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='flex-1'>
                {/* <FormLabel className='text-md'>Email</FormLabel> */}
                <FormControl>
                  <Input
                    className=' h-12 text-base  border-b-2 !border-gray-600'
                    placeholder='absd@ers.com...'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='flex flex-col md:flex-row gap-10 md:items-center'>
          <FormField
            control={form.control}
            name='companyname'
            render={({ field }) => (
              <FormItem className='flex-1'>
                {/* <FormLabel className='text-md'>Company Name</FormLabel> */}
                <FormControl>
                  <Input
                    className=' h-12 text-base  border-b-2 !border-gray-600'
                    placeholder='Your Company Name'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem className='flex-1'>
                {/* <FormLabel className='text-md'>Phone</FormLabel> */}
                <FormControl>
                  <Input
                    className=' h-12 text-base  border-b-2 !border-gray-600'
                    placeholder='0698990000'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='servicename'
          render={({ field }) => (
            <FormItem className='mb-24'>
              {/* <FormLabel className='text-md'>service_name</FormLabel> */}
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className=' h-12 text-base  border-b-2 !border-gray-600'>
                    <SelectValue placeholder='Select a service of interest' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='m@example.com'>m@example.com</SelectItem>
                  <SelectItem value='m@google.com'>m@google.com</SelectItem>
                  <SelectItem value='m@support.com'>m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='bio'
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel className='text-md'>Bio</FormLabel> */}
              <FormControl>
                <Textarea
                  placeholder=''
                  className='resiz text-base border-b-2 !border-gray-600'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          className='bg-[--primary_color] text-md '>
          Submit
        </Button>
      </form>
    </Form>
  );
}
