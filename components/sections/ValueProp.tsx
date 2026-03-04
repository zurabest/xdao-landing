import { BraintrustButton as Button } from '@/components/ui/BraintrustButton'

export function ValueProp() {
    return (
        <section className="py-24 bg-bt-blue text-white border-t border-white/10">
            <div className="container-bt">
                <span className="section-label text-white/60">
                    WHY XDAO?
                </span>

                <h2 className="text-display font-normal mt-4 max-w-3xl leading-none">
                    DAOs fail in unpredictable ways
                </h2>

                <p className="text-subhead text-white/80 mt-6 max-w-2xl font-light">
                    Without proper tooling, governance becomes chaos.
                    XDAO brings structure to your decentralized organization.
                </p>

                <div className="mt-10">
                    <Button variant="outline-light" withArrow>
                        Get started with XDAO
                    </Button>
                </div>
            </div>
        </section>
    )
}
