'use client';

import ServiceDetailsModal from './ServiceDetailsModal';
import AgentDetails from './AgentDetails';

export default function AgentDetailsModal({ id }: { id: string }) {
  return (
    <ServiceDetailsModal>
      <AgentDetails id={id} />
    </ServiceDetailsModal>
  );
}
