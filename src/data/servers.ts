export interface Server {
    name: string;
    description: string;
    link: string;
    status?: "online" | "offline" | "maintenance";
}

export const servers: Server[] = [];
