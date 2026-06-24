import SectionHeader from "../ui/SectionHeader";
import ServiceCard from "../ui/ServiceCard";
import { services } from "../../data/services";

function ServicesOverview() {
  return (
    <section className="services-overview">
      <div className="container">

        <SectionHeader
          eyebrow="SERVIZI"
          title="Competenze che accompagnano il cambiamento"
          description="Affianchiamo imprese e organizzazioni con servizi di consulenza, innovazione tecnologica e sviluppo delle competenze."
        />

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesOverview;