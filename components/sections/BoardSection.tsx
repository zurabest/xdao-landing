'use client'

const boardMembers = [
    {
        name: "Vladislav Shavlidze",
        badge: "Board Member",
        role: "Co-Founder & CEO, XDAO",
        image: "/avatars/vladislav.png"
    },
    {
        name: "Zurab Shavlidze",
        badge: "Board Member",
        role: "Co-Founder & COO, XDAO",
        image: "/avatars/zurab.png"
    },
    {
        name: "Keith Teare",
        badge: "Board Member",
        role: "Founder & CEO, SignalRank",
        secondRole: "Founding Investor, TechCrunch",
        image: "/avatars/keith.png"
    }
]

export function BoardSection() {
    return (
        <>
            <h2 id="board" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-black !mt-24 mb-8 scroll-mt-32">
                Board of Directors
            </h2>

            <p className="mb-24">
                XDAO is led by a team that understands both the <strong>technical depth of blockchain systems</strong> and the <strong>operational realities of running global organizations</strong>. This combination of <strong>hands-on building experience</strong> and <strong>strategic vision</strong> is what enables XDAO to deliver infrastructure that real teams actually want to use.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 !mt-16">
                {boardMembers.map((member, index) => (
                    <div key={index} className="text-center">
                        {/* Photo */}
                        <div className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 ring-4 ring-[#003bb9] ring-offset-4 ring-offset-white">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Name */}
                        <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                            {member.name.split(' ').map((part, i) => (
                                <span key={i} className="block">{part}</span>
                            ))}
                        </h3>

                        {/* Badge */}
                        <p className="text-[#003bb9] font-medium text-sm mb-2">
                            {member.badge}
                        </p>

                        {/* Role */}
                        <p className="text-bt-gray-text text-sm">
                            {member.role}
                        </p>
                        {member.secondRole && (
                            <p className="text-bt-gray-text text-sm">
                                {member.secondRole}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}
