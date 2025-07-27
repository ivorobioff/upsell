'use client';
import { signIn } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { credentialsResolver, CredentialsSchema } from '@/lib/models/auth';
import Link from 'next/link';

const SignInForm = () => {
  const form = useForm<CredentialsSchema>({
    resolver: credentialsResolver,
    defaultValues: {
      email: '',
      password: ''
    }
  });
  return (<Form {...form}>
    <form onSubmit={form.handleSubmit(async (data) => {
      await signIn('credentials', data);
    })} className="space-y-6 w-full">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input  {...field} type="email" />
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
              <Input  {...field} type="password" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="text-center">
        <Button type="submit" className="w-full mb-4">Sing In</Button>
        <p className="text-sm text-muted-foreground">Don't have an account? <Link href="/sign-up" target="_self" className="font-semibold">Sign Up</Link></p>
      </div>
    </form>
  </Form>);
}

export default SignInForm;