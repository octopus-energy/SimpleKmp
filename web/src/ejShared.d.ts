type Nullable<T> = T | null | undefined

// How to import the namespace?
// How to use the value?
// How to generate a package from shared code

// export namespace me.ianalexander.shared {
export class Platform {
        constructor();
        readonly platform: string;
    }
// }
export as namespace ejShared;