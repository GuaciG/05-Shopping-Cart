import { createContext, useState } from 'react'

//1. Create the context
//This is the context that we have to consume
export const FiltersContext = createContext()

//2. Create the provider to provide the context
//This is the provider that gives access to the context
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {/* 3. Consume the context in all children */}
      {children}
    </FiltersContext.Provider>
  )
}
