import { writable } from "svelte/store";

export const selectedForm = writable("login");

export const otpSent = writable(false)

export const email = writable("")

export const EMAIL = writable(process.env.EMAIL)

export const EMAIL_PASSWORD = writable(process.env.EMAIL_PASSWORD)
