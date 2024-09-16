export default function Container({ children }: { children: React.ReactNode }) {
  return <div className='container px-4  md:px-14 mx-auto'>{children}</div>;
}
