import { Marquee } from "@/components/marquee";

const locations = [
  "Brașov",
  "București",
  "Cluj-Napoca",
  "Timișoara",
  "Amsterdam",
  "Rotterdam",
  "The Hague",
  "Vienna",
  "Graz",
  "Linz",
  "Helsinki",
  "Espoo",
  "Tampere",
];

export function LocationTicker() {
  return (
    <div className="relative bg-surface/40">
      <div className="container">
        <div className="grid items-center gap-4 py-5 md:grid-cols-[auto_1fr] md:gap-10">
          <p className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Satisfied clients in
          </p>
          <Marquee items={locations} className="border-y-0" speed="95s" />
        </div>
      </div>
    </div>
  );
}
