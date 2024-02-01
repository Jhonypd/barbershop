/** @format */

import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServicesItems from "./_components/services-item";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface barbershopDetailsPageProps {
  params: {
    id?: string;
  };
}

const barbershopDetailsPage = async ({
  params,
}: barbershopDetailsPageProps) => {
  const session = await getServerSession(authOptions);

  if (!params.id) {
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    return null;
  }

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />

      <div className="px-5 flex flex-col gap-4 py-6">
        {barbershop.services.map((service) => (
          <ServicesItems
            barbershop={barbershop}
            key={service.id}
            service={service}
            isAuthenticated={!!session?.user}
          />
        ))}
      </div>
    </div>
  );
};

export default barbershopDetailsPage;
