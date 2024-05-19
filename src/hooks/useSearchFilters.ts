import { useCallback,useMemo, useRef, useState } from "react";
import { useDebounce } from 'react-use'

const useSearchFilters = (columns: any[]) => {
  const DEBOUNCE_TIME = 500;
  const refSearchInput = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState('')
  const [resultSearch, setresultSearch] = useState<any[]>([])

  const onHideSearchBox = useCallback(() => {
    setSearchTerm('');
    setresultSearch([]);
  }, []);

  const isEmptySearchResult = useMemo(() => Boolean(searchTerm && resultSearch.length === 0), [searchTerm, resultSearch]);

  const onSearchFilters = useCallback(() => {
    const result = columns?.filter((column) => {
      return column.name.toLowerCase().includes(searchTerm.toLowerCase())
    });
    setresultSearch(result)
  }, [columns, searchTerm]);

  useDebounce(
    () => {
      onSearchFilters()
    },
    DEBOUNCE_TIME,
    [searchTerm],
  )

  return {
    refSearchInput,
    onHideSearchBox,
    isEmptySearchResult,
    searchTerm,
    setSearchTerm,
    resultSearch
  }
}

export default useSearchFilters;
