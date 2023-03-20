import { type FC, Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Button from "@/components/ui/Button";
import { ChevronDown, Globe } from "lucide-react";

interface LanguageSwitchProps {
  onChange: (language: string) => void;
}

interface Language {
  code: string;
  name: string;
}

const availableLanguages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "ar", name: "عربية" },
];
const LanguageSwitch: FC<LanguageSwitchProps> = ({ onChange }) => {
  const [language, setLanguage] = useState<Language>({ code: "en", name: "English" });
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          as={Button}
          className="border border-zinc-600 bg-black/50 px-3 text-base font-normal text-white hover:bg-black/50 hover:text-white"
        >
          <Globe className="h-4 w-4 md:mr-2" />
          <span className="hidden md:inline">{language.name}</span>
          <ChevronDown className="ml-3 h-4 w-4" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {availableLanguages.map((language) => (
              <Menu.Item
                key={language.code}
                onClick={() => {
                  setLanguage(language);
                  onChange(language.code);
                }}
                as="button"
                className="flex w-full items-center rounded-md p-2 text-sm text-zinc-900 hover:bg-zinc-100"
              >
                {language.name}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguageSwitch;
