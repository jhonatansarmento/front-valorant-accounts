// import api from "./services/api";
import useFetch from "./services/fetch";

export default function App() {

  const { loading, error, data } = useFetch('http://3.88.110.25:3000')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error dsdasdasdas:(</p>

  return (
    <div>
      {data.map(data => {
        return (
            <strong>{data.name}</strong>
        )
      })}
    </div>
  );
}