interface LoadState {

    data: ClientOrder
    loading: "idle" | "success" | "error" | "loading"
}

const useClientOrderLoader = ({autoLoading = false}) => {

    const [state, setState] = useState<LoadState>({
        data: null,
        loading: "idle"
    })

    const error = useMemo(() => state.loading === "error" , [state.loading])
    const loading = useMemo(() => state.loading === "loading" , [state.loading])

    const forceLoad = useCallback(() => {
        const loadPromise = fetch("").then(data => setData())

        loadPromise.catch
    }, [])

    useEffect(() => {
        if (autoLoading) {
            forceLoad()
        }

    }, [autoLoading]) 

    return {
        data,
        error,
        loading,
        forceLoad
    }
}