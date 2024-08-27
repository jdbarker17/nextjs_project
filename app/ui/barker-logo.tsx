import { Cog8ToothIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function BarkerLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Cog8ToothIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[24px]">Barker Innovations</p>
    </div>
  );
}
