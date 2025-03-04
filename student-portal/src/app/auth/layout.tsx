import React from 'react'
type LayoutProps = {
    children: React.ReactNode
}
const layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#6828CE] via-[#612cc3] to-black">
            <div>
                {children}
            </div>
        </div>
    )
}

export default layout