import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { API_URLS, SourceType } from '../constants/api'

interface TabsProps {
  onChange?: (selectedTab: SourceType) => void
}

const tabs = Object.keys(API_URLS) as SourceType[]

export default function Tabs({ onChange }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  const [tabStyle, setTabStyle] = useState({ left: 0, width: 0 })
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    const selectedIndex = tabs.indexOf(selectedTab)
    const tab = tabRefs.current[selectedIndex]
    if (tab) {
      setTabStyle({ left: tab.offsetLeft, width: tab.offsetWidth })
    }
  }, [selectedTab])

  const handleTabClick = (tab: SourceType) => {
    setSelectedTab(tab)
    onChange?.(tab)
  }

  return (
    <div className='relative mb-3 w-full max-w-md'>
      <div className='relative flex space-x-4 border-b border-gray-200'>
        {tabs.map((tab, index) => (
          <button
            key={tab}
            ref={(el) => {
              tabRefs.current[index] = el
            }}
            onClick={() => handleTabClick(tab)}
            className={`relative cursor-pointer py-2 text-sm font-bold transition-colors duration-300 hover:text-blue-500 ${
              selectedTab === tab ? 'text-blue-500' : 'text-gray-400'
            }`}
          >
            {API_URLS[tab].title.toUpperCase()}
          </button>
        ))}
        <motion.div
          className='bg-blue absolute bottom-0 h-[2px] bg-blue-500'
          animate={tabStyle}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      </div>
    </div>
  )
}
