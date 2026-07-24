export function asset(pfad: string) {
  return `${import.meta.env.BASE_URL}${pfad.replace(/^\//, "")}`
}
