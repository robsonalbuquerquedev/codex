import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import AutoresEstilosCard from "@/components/card/AutoresEstilosCard";

export default function AutoresEstilosPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/hqs-mangas"
                    label="Voltar para HQs & Mangás"
                />
            }
        >
            <AutoresEstilosCard />
        </CardLayout>
    );
}