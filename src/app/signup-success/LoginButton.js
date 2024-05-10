"use client"

import { useRouter } from 'next/navigation';

export default function LoginButton() {
    const router = useRouter();

    return (
        <button onClick={() => router.push('/signin')} type="button">
            로그인
        </button>
    );
}
