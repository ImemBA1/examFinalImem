import {useEffect, useState} from "react";
import {getAllClients, getAllClientsByGenderMale, getAllClientsByProvinceOntario} from "../../services/servciceClients";
import "./style.css";

export default function Home() {

    const [data, setData] = useState([]);
    const [deps, setDeps] = useState(1);

    useEffect(() => {
        if (deps === 1) {
            getAllClients().then((data) => {
                setData(data);
            }).catch((error) => {
                console.log(error);
            });
        } else if (deps === 2) {
            getAllClientsByGenderMale().then((data) => {
                setData(data);
            }).catch((error) => {
                console.log(error);
            });
        } else if (deps === 3) {
            getAllClientsByProvinceOntario().then((data) => {
                setData(data);
            }).catch((error) => {
                console.log(error);
            });
        } else {
            setData([]);
        }
    }, [deps]);

    return (
        <div>
            <button onClick={() => setDeps(1)}>Fetch tous les clients</button>
            <button onClick={() => setDeps(2)}>Fetch hommes</button>
            <button onClick={() => setDeps(3)}>Fetch Ontariens</button>
            <table>
                <tr>
                    <th>Preom</th>
                    <th>Nom</th>
                    <th>Sexe</th>
                    <th>Date</th>
                    <th>Province</th>
                </tr>
                {data.map((client) =>
                    <tr>
                        <td>{client.firstName}</td>
                        <td>{client.lastName}</td>
                        <td>{client.gender}</td>
                        <td>{client.birthDate}</td>
                        <td>{client.province}</td>
                    </tr>)}
            </table>
        </div>
    );
}