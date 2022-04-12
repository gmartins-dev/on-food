import { useRouter } from "next/router";

export default function Descobrir () {
    
    const router = useRouter ();
    const city = router.query.city;
    return <h1>pagina dinamica descobrir testeee: {city} </h1>;

}