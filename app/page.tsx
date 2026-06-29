import VariantTwo from "@/components/VariantTwo";

// Default landing — variant /2 (Deep Basin Carrier) is the public face of the site.
// The other shells remain available at /1, /2, /3 via the variant switcher.
export default function Home() {
  return <VariantTwo activePath="/2" />;
}
