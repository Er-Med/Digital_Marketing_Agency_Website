import Link from "next/link";

export default function SubList({
  isDropdownOpen,
  closeDropdown,
  serviceSubLinks,
  handleMobileBar,
}: any) {
  return (
    <ul
      className={`md:absolute -left-4 mt-6 z-50 sm:bg-white rounded-md shadow-sm divide-y divide-[--light_gray_color]  justify-center
    [box-shadow:0_15px_32px_rgba(0,_0,_0,_0.1)] ${
      isDropdownOpen ? "flex" : "hidden"
    } w-[250px] flex-col`}>
      {serviceSubLinks.map((subLink: any) => (
        <li
          key={subLink.id}
          className='group duration-200 hover:bg-orange-500 hover:first-line:text-white'
          onClick={() => {
            closeDropdown();
            handleMobileBar();
          }}>
          <Link
            href={`/services/${subLink.slug}`}
            className='py-2 px-4 block text-center md:text-start'>
            {subLink.name}
          </Link>

          {/* Conditional rendering of nested sub-services */}
          {subLink.nestedServices && (
            <ul className=' absolute left-[100%] top-[10%] font-semibold text-base divide-y divide-[--light_gray_color] [box-shadow:0_15px_32px_rgba(0,_0,_0,_0.1)] z-50 bg-white rounded-md hidden sm:group-hover:block min-w-[150px]'>
              {subLink.nestedServices.map((s: any) => (
                <li
                  key={s.id}
                  className='px-4 py-2 duration-200 hover:bg-orange-500 hover:first-line:text-white'
                  onClick={closeDropdown}>
                  <Link
                    href={`/services/${subLink.slug}/${s.slug}`}
                    className=''>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
