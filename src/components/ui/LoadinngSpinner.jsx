import React from 'react';

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'blue', 
  variant = 'border',
  fullScreen = false,
  label = 'Loading...'
}) {
  // Size mapping
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6', 
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-24 h-24'
  };

  // Color mapping for different variants
  const colorClasses = {
    border: {
      blue: 'border-gray-200 border-t-blue-600',
      green: 'border-gray-200 border-t-green-600',
      red: 'border-gray-200 border-t-red-600',
      purple: 'border-gray-200 border-t-purple-600',
      yellow: 'border-gray-200 border-t-yellow-600',
      gray: 'border-gray-200 border-t-gray-600',
    },
    dots: {
      blue: 'text-blue-600',
      green: 'text-green-600', 
      red: 'text-red-600',
      purple: 'text-purple-600',
      yellow: 'text-yellow-600',
      gray: 'text-gray-600',
    }
  };

  const containerClasses = fullScreen 
    ? "fixed inset-0 flex justify-center items-center bg-white bg-opacity-75 z-50"
    : "flex justify-center items-center";

  // Border spinner (your original style, improved)
  const BorderSpinner = () => (
    <div
      className={`animate-spin rounded-full border-4 ${colorClasses.border[color]} ${sizeClasses[size]}`}
      role="status"
      aria-label={label}
    />
  );

  // Dots spinner alternative
  const DotsSpinner = () => (
    <div className={`flex space-x-1 ${colorClasses.dots[color]}`} role="status" aria-label={label}>
      <div className={`animate-bounce rounded-full ${size === 'xs' ? 'w-2 h-2' : size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : size === 'lg' ? 'w-5 h-5' : 'w-6 h-6'} bg-current`} style={{ animationDelay: '0ms' }}></div>
      <div className={`animate-bounce rounded-full ${size === 'xs' ? 'w-2 h-2' : size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : size === 'lg' ? 'w-5 h-5' : 'w-6 h-6'} bg-current`} style={{ animationDelay: '150ms' }}></div>
      <div className={`animate-bounce rounded-full ${size === 'xs' ? 'w-2 h-2' : size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : size === 'lg' ? 'w-5 h-5' : 'w-6 h-6'} bg-current`} style={{ animationDelay: '300ms' }}></div>
    </div>
  );

  // Pulse spinner alternative
  const PulseSpinner = () => (
    <div
      className={`animate-pulse rounded-full bg-current ${sizeClasses[size]} ${colorClasses.dots[color]}`}
      role="status"
      aria-label={label}
    />
  );

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return <DotsSpinner />;
      case 'pulse':
        return <PulseSpinner />;
      default:
        return <BorderSpinner />;
    }
  };

  return (
    <div className={containerClasses}>
      {renderSpinner()}
      <span className="sr-only">{label}</span>
    </div>
  );
}

// Demo component to show all variants
function SpinnerDemo() {
  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Loading Spinner Variants</h1>
      
      {/* Sizes Demo */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Sizes</h2>
        <div className="flex items-center space-x-8">
          <div className="text-center">
            <LoadingSpinner size="xs" />
            <p className="text-sm mt-2">xs</p>
          </div>
          <div className="text-center">
            <LoadingSpinner size="sm" />
            <p className="text-sm mt-2">sm</p>
          </div>
          <div className="text-center">
            <LoadingSpinner size="md" />
            <p className="text-sm mt-2">md</p>
          </div>
          <div className="text-center">
            <LoadingSpinner size="lg" />
            <p className="text-sm mt-2">lg</p>
          </div>
          <div className="text-center">
            <LoadingSpinner size="xl" />
            <p className="text-sm mt-2">xl</p>
          </div>
        </div>
      </div>

      {/* Variants Demo */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Variants</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <LoadingSpinner variant="border" />
            <p className="text-sm mt-2">Border</p>
          </div>
          <div className="text-center">
            <LoadingSpinner variant="dots" />
            <p className="text-sm mt-2">Dots</p>
          </div>
          <div className="text-center">
            <LoadingSpinner variant="pulse" />
            <p className="text-sm mt-2">Pulse</p>
          </div>
        </div>
      </div>

      {/* Colors Demo */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Colors</h2>
        <div className="grid grid-cols-6 gap-4">
          {['blue', 'green', 'red', 'purple', 'yellow', 'gray'].map(color => (
            <div key={color} className="text-center">
              <LoadingSpinner color={color} />
              <p className="text-sm mt-2 capitalize">{color}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Examples */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Usage Examples</h2>
        <div className="space-y-4">
          <div className="border rounded p-4 h-24">
            <p className="text-sm text-gray-600 mb-2">Inline loading:</p>
            <LoadingSpinner size="sm" color="green" />
          </div>
          <div className="border rounded p-4 h-32 relative">
            <p className="text-sm text-gray-600 mb-2">Card loading:</p>
            <div className="absolute inset-0 flex items-center justify-center">
              <LoadingSpinner size="lg" color="purple" variant="dots" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}