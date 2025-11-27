const NotlyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Modern calendar outline with rounded corners */}
    <rect x="3" y="4" width="18" height="17" rx="4" stroke="currentColor" strokeWidth="1.8" fill="none"/>
    {/* Header bar */}
    <rect x="3" y="4" width="18" height="4" rx="2" fill="currentColor" opacity="0.08"/>
    {/* Top rings */}
    <rect x="7" y="1.5" width="2" height="5" rx="1" fill="currentColor"/>
    <rect x="15" y="1.5" width="2" height="5" rx="1" fill="currentColor"/>
    {/* Modern day dots */}
    <circle cx="7.5" cy="11" r="1.1" fill="currentColor"/>
    <circle cx="12" cy="11" r="1.1" fill="currentColor"/>
    <circle cx="16.5" cy="11" r="1.1" fill="currentColor"/>
    <circle cx="7.5" cy="15" r="1.1" fill="currentColor"/>
    <circle cx="12" cy="15" r="1.1" fill="currentColor"/>
    <circle cx="16.5" cy="15" r="1.1" fill="currentColor"/>
  </svg>
);
export default NotlyIcon;
