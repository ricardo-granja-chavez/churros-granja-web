import type { InputHTMLAttributes } from 'react'

interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  onSearch?: (value: string) => void
}

export function SearchBar({
  placeholder = 'Search',
  className = '',
  onSearch,
  onChange,
  ...props
}: SearchBarProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e)
    onSearch?.(e.target.value)
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* Icono lupa */}
      <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-on-surface-variant">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </span>

      <input
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
        className={[
          'w-full rounded-full bg-surface-container-lowest pl-11 pr-space-md py-3.5',
          'font-body text-body-sm text-on-surface placeholder:text-on-surface-variant',
          'shadow-inner border border-outline-variant',
          'transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-secondary-container focus:border-transparent',
        ].join(' ')}
        {...props}
      />
    </div>
  )
}
