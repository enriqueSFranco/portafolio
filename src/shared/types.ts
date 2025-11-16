export type SocialProfile = {
    network: "gitHub" | "linkedin",
    username: string,
    url: string
}

export type DownloadLink = {
    href: string;
    downloadName: string;
    text: string;
}