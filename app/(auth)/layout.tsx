import { ClerkProvider }from '@clerk/nextjs';

export default function AuthLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <ClerkProvider>
                {children}
            </ClerkProvider>
        </div>
    )
}