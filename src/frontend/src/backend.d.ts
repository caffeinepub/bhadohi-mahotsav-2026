import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface StallBooking {
    id: bigint;
    stallType: string;
    name: string;
    email: string;
    company: string;
    message: string;
}
export interface Exhibitor {
    id: bigint;
    productCategory: string;
    name: string;
    description: string;
    email: string;
    company: string;
}
export interface Event {
    id: bigint;
    title: string;
    date: Time;
    description: string;
    imageUrl: string;
    category: string;
}
export interface backendInterface {
    addEvent(event: Event): Promise<bigint>;
    getEvent(id: bigint): Promise<Event>;
    getEvents(): Promise<Array<Event>>;
    getExhibitors(): Promise<Array<Exhibitor>>;
    getNewsletterSignups(): Promise<Array<string>>;
    getStallBookings(): Promise<Array<StallBooking>>;
    newsletterSignup(email: string): Promise<void>;
    registerExhibitor(exhibitor: Exhibitor): Promise<bigint>;
    submitStallBooking(booking: StallBooking): Promise<bigint>;
}
