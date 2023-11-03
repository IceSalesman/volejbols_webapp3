import { writable } from "svelte/store";

export const selectedForm = writable("login");

export const otpSent = writable(false)

export const email = writable("")

