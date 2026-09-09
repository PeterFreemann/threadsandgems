'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronDown, Receipt, Settings, LogOut } from 'lucide-react';
import { useClerk, useUser } from '@clerk/nextjs';

// brand tokens (shared with the headers)
const GOLD = '#C9A84C';
const DARK = '#2C1810';

/**
 * Auth controls for the site headers.
 * - Signed out: "Sign In" link + "Sign Up" button
 * - Signed in:  the user's name + a chevron that opens a dropdown
 *   (My Orders / Manage account / Sign out)
 *
 * `tone` adjusts the trigger text colour for headers that sit on a dark or
 * transparent background before the user scrolls.
 */
export default function AuthNav({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut, openUserProfile } = useClerk();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close the dropdown on an outside click or Escape.
  useEffect(() => {
    if (!open) return;

    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (!isLoaded) {
    return <div className="w-8 h-8" aria-hidden />;
  }

  const textColor = tone === 'light' ? '#ffffff' : DARK;

  if (!isSignedIn) {
    return (
      <div className="flex items-center gap-3">
        <Link
          href="/sign-in"
          className="text-sm font-medium uppercase tracking-wide transition-opacity hover:opacity-80"
          style={{ color: textColor }}
        >
          Sign In
        </Link>
        <Link
          href="/sign-up"
          className="text-sm font-medium uppercase tracking-wide px-4 py-2 text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: GOLD }}
        >
          Sign Up
        </Link>
      </div>
    );
  }

  const name =
    [user.firstName, user.lastName].filter(Boolean).join(' ') ||
    user.primaryEmailAddress?.emailAddress ||
    'Account';
  const initials =
    (user.firstName?.[0] ?? user.primaryEmailAddress?.emailAddress?.[0] ?? 'U').toUpperCase();

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-2 transition-opacity hover:opacity-80"
        style={{ color: textColor }}
      >
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white shrink-0"
          style={{ backgroundColor: GOLD }}
        >
          {user.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={user.imageUrl} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : (
            initials
          )}
        </span>
        <span className="text-sm font-medium tracking-wide max-w-[10rem] truncate">{name}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-56 bg-white border border-stone-200 shadow-lg py-1 z-50"
        >
          <div className="px-4 py-3 border-b border-stone-100">
            <p className="text-sm font-medium text-stone-900 truncate">{name}</p>
            {user.primaryEmailAddress?.emailAddress && (
              <p className="text-xs text-stone-500 truncate">
                {user.primaryEmailAddress.emailAddress}
              </p>
            )}
          </div>

          <Link
            href="/account/orders"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-stone-700 hover:bg-stone-50"
          >
            <Receipt className="w-4 h-4 text-stone-400" />
            My Orders
          </Link>

          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              openUserProfile();
            }}
            className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-stone-700 hover:bg-stone-50"
          >
            <Settings className="w-4 h-4 text-stone-400" />
            Manage account
          </button>

          <div className="border-t border-stone-100 my-1" />

          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              signOut(() => router.push('/'));
            }}
            className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-stone-50"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
