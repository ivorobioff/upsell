'use client'
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import { credentialsResolver, CredentialsSchema } from '@/lib/models/credentials';
import { signIn } from 'next-auth/react';

import { useForm } from 'react-hook-form';

const SignIn = () => {

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
    })} className="w-2/3 space-y-6">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input  {...field} type="email" />
            </FormControl>
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
          </FormItem>
        )}
      />
      <Button type="submit">Sing In</Button>
    </form>
  </Form >);
}

export default SignIn;