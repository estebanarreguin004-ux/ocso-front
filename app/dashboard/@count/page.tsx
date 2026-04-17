import axios from "axios"
const CountPage =  async () => {
    try {
        const response = await axios.get("http://localhost:3000/locations");
        const count = response?.data?.length || 0;

        // 2. IMPORTANTE: Retorna JSX, no solo el número
        return (
            <div>
                <h1>Total de Ubicaciones: {count}</h1>
            </div>
        );
    } catch (error) {
        return <div>Error al cargar las ubicaciones.</div>;
    }
}

export default CountPage

