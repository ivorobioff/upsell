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
      <Button type="submit">Sing In</Button>
    </form>
  </Form>);
}

export default SignInForm;