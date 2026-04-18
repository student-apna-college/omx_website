import { industriesData } from "@/data/industriesData";
import IndustryPageUI from "@/components/IndustryPage/IndustryPageUI";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default  async function IndustryPage({ params }: Props) {
  const { slug } = await params; 

  const data = industriesData[slug];

  if (!data) return notFound();

  return <IndustryPageUI data={data} />;
}