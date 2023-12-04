import { useParams } from "react-router-dom";

export const ServiceDetails = ({services}) => {
    // console.log(useParams());

    const {id} = useParams();

    const service = services.find(service => service.id.toString() === id);


  return (
    <div>
        <section>
            <h2>Service Details</h2>
            <h3>{service.name}</h3>
            <h4>{service.id}</h4>
            <h4>${service.price}</h4>
        </section>
    </div>
  )
}
