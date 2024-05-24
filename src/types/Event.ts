export interface Event {
    id: string;
    title?: string | null;
    description?: string | null;
    city?: string | null;
    zipCode?: number | null;
    state?: string | null;
    email?: string | null;
    phone?: number | null;
    date?: string | null;
    time?: string | null;
    venue?: string | null;
    image?: string | null;
}
