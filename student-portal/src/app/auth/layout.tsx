import React from 'react'
type LayoutProps = {
    children: React.ReactNode
}
const layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#1a0b2e] to-[#2d1b4e]">
            <div>
                {children}
            </div>
        </div>
    )
}

export default layout