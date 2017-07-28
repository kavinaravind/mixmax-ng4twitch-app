export class Game {

    constructor(
       public name: string,
        public popularity: string,
        public _id: string,
        public giantbomb_id: string,
        public box: {
            large: string,
            medium: string,
            small: string,
            template: string
        },
        public logo: {
            large: string,
            medium: string,
            small: string,
            template: string
        },
        public _links: { },
        public localized_name: string,
        public locale: string 
    ) { }
}