export interface Posts {
    modhash: string;
    dist: number;
    children: Post[]
    data: string

}

export interface Post {
    //children: post[] 
    title: string;
    permalink: string;
    thumbnail: string;
}


