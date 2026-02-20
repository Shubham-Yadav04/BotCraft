'use client';

import ServiceDetailsModal from './ServiceDetailsModal';
import BotDetails from './BotDetails';

export default function BotDetailsModal({ id }: { id: string }) {
  return (
    <ServiceDetailsModal>
      <BotDetails id={id} />
    </ServiceDetailsModal>
  );
}
