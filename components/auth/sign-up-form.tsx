'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { register } from '@/lib/actions/auth';
import { createUserResolver, CreateUserSchema } from '@/lib/models/auth';
import { CheckCircle2Icon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const SignUpForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const form = useForm<CreateUserSchema>({
    resolver: createUserResolver,
    defaultValues: {
      email: '',
      password: '',
      name: ''
    }
  });

  const { setError, reset, formState: { isDirty } } = form;

  const canSubmit = !submitting && isDirty;

  return (<Form {...form}>
    <form onSubmit={form.handleSubmit(async (data) => {
      try {
        setSubmitting(true);
        setSuccess(false);

        const { ok, message } = await register(data);

        if (!ok) {
          setError('email', { message });
        } else {
          setSuccess(true);
          reset();
        }

      } finally {
        setSubmitting(false);
      }
    })} className="auth-form">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input  {...field} />
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
      {success && <Alert className="alert-success">
        <CheckCircle2Icon />
        <AlertTitle>Welcome!</AlertTitle>
        <AlertDescription>Your registration is complete. Go ahead and sign in.</AlertDescription>
      </Alert>}
      <div className="text-center">
        <Button disabled={!canSubmit} type="submit" className="w-full mb-4">{submitting ? 'Signing Up...' : 'Sign Up'}</Button>
        <p className="text-sm text-muted-foreground">Already have an account? <Link href="/sign-in" target="_self" className="font-semibold">Sign In</Link></p>
      </div>
    </form>
  </Form>);
}

export default SignUpForm;