import SectionHeader from "../ui/SectionHeader";
import ServiceCard from "../ui/ServiceCard";
import { services } from "../../data/services";

function ServicesOverview() {
  return (
    <section className="section services-overview" id="servizi">
      <div className="container">
        <SectionHeader
          eyebrow="Servizi"
          title="Le competenze per accompagnare la tua evoluzione."
          description="Dalla definizione della strategia allo sviluppo delle competenze, supportiamo imprese e organizzazioni nei percorsi di trasformazione digitale."
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