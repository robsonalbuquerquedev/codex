import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import BastidoresCuriososCard from "@/components/card/BastidoresCuriososCard";

export default function BastidoresCuriososPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/curiosidades"
                    label="Voltar para Curiosidades"
                />
            }
        >
            <BastidoresCuriososCard />
        </CardLayout>
    );
}
