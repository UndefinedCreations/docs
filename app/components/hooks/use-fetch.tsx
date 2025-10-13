import { useState, useEffect } from "react"

export function useFetch<T = unknown>(url: string, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!url) return

    const controller = new AbortController()
    const signal = controller.signal

    async function fetchData() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(url, { ...options, signal })
        if (!res.ok) throw new Error(`Fetch error: ${res.status}`)
        const json = (await res.json()) as T
        setData(json)
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    return () => controller.abort()
  }, [url, JSON.stringify(options)]) // stringify to watch deep equality

  return { data, error, loading }
}
