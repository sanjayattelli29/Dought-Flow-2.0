type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "free",
        title: "Basic",
        desc: "Start organizing and sharing notes with essential features.",
        monthlyPrice: 0,
        yearlyPrice: 0,
        buttonText: "Get Started",
        features: [
            "Unlimited personal notes",
            "Basic text formatting",
            "Cloud sync across devices",
            "Community support",
            "1 shared workspace",
            "Standard search functionality"
        ],
        link: "https://notes-galaxy.netlify.app/"
    },
    {
        id: "pro",
        title: "Pro",
        desc: "Unlock powerful tools for better note organization and collaboration.",
        monthlyPrice: 8,
        yearlyPrice: 80,
        badge: "Most Popular",
        buttonText: "Upgrade to Pro",
        features: [
            "Advanced text formatting & media embedding",
            "5 shared workspaces",
            "Priority customer support",
            "Offline access",
            "Tagging and categorization",
            "AI-powered note suggestions",
            "Version history & recovery",
            "Custom templates"
        ],
        link: "https://notes-galaxy.netlify.app/"
    },
    {
        id: "enterprise",
        title: "Enterprise",
        desc: "Comprehensive solutions for teams and organizations.",
        monthlyPrice: 15,
        yearlyPrice: 150,
        badge: "Contact Sales",
        buttonText: "Upgrade to Enterprise",
        features: [
            "Unlimited shared workspaces",
            "Advanced collaboration tools",
            "Team roles & permissions",
            "Custom branding",
            "Enterprise-grade security",
            "API access & integrations",
            "Dedicated account manager",
            "24/7 priority support"
        ],
        link: "https://notes-galaxy.netlify.app/"
    }
];
