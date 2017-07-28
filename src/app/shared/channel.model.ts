export class Channel {

    constructor(
        public mature: boolean,
        public partner: boolean,
        public status: string,
        public broadcaster_language: string,
        public display_name: string,
        public game: string,
        public language: string,
        public _id: string,
        public name: string,
        public created_at: string,
        public updated_at: string,
        public delay: any,
        public logo: string,
        public banner: any,
        public video_banner: string,
        public background: string,
        public profile_banner: string,
        public profile_banner_background_color: string,
        public url: string,
        public views: string,
        public followers: string,
        public _links: {},
    ) { }
}