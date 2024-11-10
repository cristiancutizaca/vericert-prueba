import React, { useEffect, useState } from 'react';
import { Switch } from '@nextui-org/react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <div
      className={`p-4 rounded-lg ${
        theme === 'dark' ? 'bg-darkBackground text-darkText' : 'bg-lightBackground text-lightText'
      }`}
    >
      <Switch
        isSelected={theme === 'dark'}
        size="lg"
        color="default"
        className=""
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={`text-yellow-400 ${className}`} />
          ) : (
            <MoonIcon className={`text-blue-500 ${className}`} />
          )
        }
        onChange={handleThemeChange}
      />
    </div>
  );
};

export default ThemeSwitcher;
