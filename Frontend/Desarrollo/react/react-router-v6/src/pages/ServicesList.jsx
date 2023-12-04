import { Link } from "react-router-dom";

export const ServicesList = ({services})=>{
    return(
        <>
            <h2>Services - List</h2>
            <ul>
                {services.map((service)=>
                <li key={service.id}>
                    <Link to={`/services/${service.id}`}>{service.name}</Link>
                </li>
                )}
            </ul>

        </>
    );
}