"use client"

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState, useTransition } from "react"
import { Button } from "@/app/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/app/components/ui/form"
import { Input } from "@/app/components/ui/input"
import { z } from "zod"
import { SignUpFormSchema } from "@/schemas/index"
import { Register } from "@/actions/register"
import { FormError } from "@/app/componentss/FormError"


export const RegisterForm = () => {

    const [isPending, startTransition] = useTransition()
    const [errors, setErrors] = useState<string | undefined>("")
    const router = useRouter();

    const form = useForm<z.infer<typeof SignUpFormSchema>>({
        resolver: zodResolver(SignUpFormSchema),
        mode: 'onChange', // Validate on every change
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof SignUpFormSchema>) => {
        setErrors("")

        startTransition(async() => {
            const r = await Register({
                email: values.email,
                password: values.password,
                name: values.name
            });
          
            if (r?.error) {
                setErrors(r.error);
                return;
            } else {
                return router.push("/my-profile");
            }
        });
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6">
                <div className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="John Doe"
                                        onChange={field.onChange}
                                        onBlur={field.onBlur}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="john.doe@example.com"
                                        type="email"
                                        onChange={field.onChange}
                                        onBlur={field.onBlur}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="*******"
                                        type="password"
                                        onChange={field.onChange}
                                        onBlur={field.onBlur}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormError message={errors} />
                <Button variant="next" type="submit">
                    Create an account
                </Button>
            </form>

        </Form>

    )
}
