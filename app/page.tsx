"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "@/components/ui/badge";
import { quantum } from "ldrs";

quantum.register();

interface Motivacion {
  _id: string;
  titulo: string;
  descripcion: string;
  etiquetas: string[];
}

export default function Home() {
  const [motivaciones, setMotivaciones] = React.useState<Motivacion[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchMotivaciones() {
      try {
        const response = await fetch("/api");
        const data = await response.json();
        setMotivaciones(data);
      } catch (error) {
        console.error("Error fetching motivaciones:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMotivaciones();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {isLoading ? (
        <>
          <h1 className="text-3xl text-white font-mono text-center">Buscando mis motivaciones</h1>
          <l-quantum size="45" speed="1.75" color="white"></l-quantum>
        </>
      ) : (
        <>
          <h1 className="text-3xl text-white font-mono">Motivaciones</h1>
          <Carousel
            className="w-2/3 max-w-2/3"
            opts={{
              align: "start",
              loop: true,
              containScroll: false,
            }}
            plugins={[Autoplay({ delay: 5000 })]}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {motivaciones.map((motivacion) => (
                <CarouselItem key={motivacion._id} className="pl-2 md:pl-4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center gap-2 bg-black">
                        <h1 className="text-1xl font-semibold text-white pt-1">
                          {motivacion.titulo}
                        </h1>
                        <p className="text-white text-wrap">{motivacion.descripcion}</p>
                        <div className="flex flex-wrap gap-1">
                          {motivacion.etiquetas.map((etiqueta) => (
                            <Badge key={etiqueta} variant="outline" className="text-white">
                              {etiqueta}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </>
      )}
    </main>
  );
}
