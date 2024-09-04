"use client"

import { signIn } from "next-auth/react";
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
import { SignInFormSchema } from "@/schemas/index"
import { FormError } from "@/app/componentss/FormError"


export const LoginForm = () => {

    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string| undefined>("")
    const router = useRouter();

    const form = useForm<z.infer<typeof SignInFormSchema>>({
        resolver: zodResolver(SignInFormSchema),
        mode: 'onChange', // Validate on every change
        defaultValues: {
            email: "",
            password: "",
        },
    }); 

    const onSubmit = (values: z.infer<typeof SignInFormSchema>) => { 
        setError("") 

        startTransition(async () => {
            const res = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
            });
            if (res?.error) {
                setError(res.error as string);
            } else if (res?.ok) {
                router.push("/my-profile");
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
                                        disabled={isPending}
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
                                        disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div> 
                <FormError message={error} />
                <Button variant="next" type="submit" disabled={isPending}>
                    Login
                </Button>
            </form>

        </Form>

    )
}
