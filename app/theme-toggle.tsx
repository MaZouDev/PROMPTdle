'use client'

import {useTheme} from 'next-themes'

export default function ThemeToggle() {

    // const { theme, setTheme } = useTheme()
    //
    return (
        <div className="flex flex-col">
            The current theme is: {/*{theme}*/}
            {/*{theme === 'light' && <button onClick={() => setTheme('dark')}>Dark Mode</button>}*/}
            {/*{theme === 'dark' && <button onClick={() => setTheme('light')}>Light Mode</button>}*/}
        </div>
    )
}
