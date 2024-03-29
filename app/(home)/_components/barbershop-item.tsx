/** @format */

"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface BarbershopProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopProps) => {
  const router = useRouter();

  const handleBookingClick = () => {
    router.push(`/barbershops/${barbershop.id}`);
  };
  return (
    <Card className="min-w-full max-w-full rounded-2xl">
      <CardContent className="px-1 py-0 pt-1">
        <div className="w-full h-[159px] relative">
          <div className="absolute top-2 left-2 z-[49]">
            <Badge
              variant={"secondary"}
              className="gap-1 opacity-90 flex items-center top-3 left-3 ">
              <StarIcon size={12} className="fill-primary text-primary" />
              <span className="tex-xs">5,0</span>
            </Badge>
          </div>
          <Image
            alt={barbershop.name}
            src={barbershop.imageUrl}
            style={{ objectFit: "cover" }}
            fill
            className="rounded-2xl"
          />
        </div>
        <div className="px-2 pb-3">
          <h2 className="font-bold mt-2 overflow-hidden truncate text-ellipsis text-nowrap">
            {barbershop.name}
          </h2>
          <p className="tex-sm text-gray-400 truncate text-ellipsis overflow-hidden text-nowrap">
            {barbershop.address}
          </p>
          <Button
            onClick={handleBookingClick}
            variant={"secondary"}
            className="w-full mt-3">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
