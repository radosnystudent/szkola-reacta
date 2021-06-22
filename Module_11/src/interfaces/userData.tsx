export interface userDataI {
    cell: string;
    dob: {date: string; age: number;};
    email: string;
    gender: string;
    location: {
        city: string;
        coordinates: {latitude: string; longitude: string;};
        country: string;
        postcode: number;
        state: string;
        street:{
            name: string;
            number: number;
        };
    };
    login: {
        uuid: string; username: string; password: string; salt: string; md5: string;
     };
    name: {title: string; first: string; last: string;};
    nat: string;
    phone: string;
    picture: { large: string; medium: string; thumbnail: string; };
    registered: {
        age: number;
        date: string;
    };
}