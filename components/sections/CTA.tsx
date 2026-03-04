import { BraintrustButton as Button } from '@/components/ui/BraintrustButton'

export function CTA() {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container-bt">
                <h2 className="text-display font-normal leading-tight">
                    Bring structure to your<br />
                    DAO development
                </h2>

                <div className="mt-10 flex flex-wrap gap-4">
                    <Button variant="primary">
                        Sign up
                    </Button>
                    <Button variant="outline-light">
                        Request a demo
                    </Button>
                </div>
            </div>
        </section>
    )
}
