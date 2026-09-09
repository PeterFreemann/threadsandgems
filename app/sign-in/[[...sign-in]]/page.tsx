import { SignIn } from '@clerk/nextjs';
import Header from '../../../components/Header';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main className="flex items-center justify-center px-6 pt-32 pb-20">
        <SignIn
          appearance={{
            variables: { colorPrimary: '#C9A84C' },
          }}
        />
      </main>
    </div>
  );
}
