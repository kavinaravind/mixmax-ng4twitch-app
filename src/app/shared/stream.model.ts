export class Stream {

    constructor(
        public _id: number,
        public game: string,
        public viewers: number,
        public video_height: number,
        public average_fps: number,
        public delay: number,
        public created_at: string,
        public is_playlist: boolean,
        public stream_type: string,
        public preview: {
            small: string,
            medium: string,
            large: string,
            template: string
        },
        public channel: {
            mature: boolean,
            partner: boolean,
            status: string,
            broadcaster_language: string,
            display_name: string,
            game: string,
            language: string,
            _id: string,
            name: string,
            created_at: string,
            updated_at: string,
            delay: any,
            logo: string,
            banner: any,
            video_banner: string,
            background: string,
            profile_banner: string,
            profile_banner_background_color: string,
            url: string,
            views: string,
            ollowers: string,
            _links: {},
        },
        public _links: {} 
    ) { }
}