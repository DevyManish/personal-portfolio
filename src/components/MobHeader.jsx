import React from 'react'
import { FloatingDock } from './ui/floating-dock'
import { links2 } from '@/lib/data'

const MobHeader = () => {
    return (
        <FloatingDock
            items={links2}
        />
    )
}

export default MobHeader
