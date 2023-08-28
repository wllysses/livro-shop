export interface Book {
    id: string
    volumeInfo: {
        title: string
        authors: string[]
        publishedDate: string
        imageLinks: {
            thumbnail: string
        }
    }
    saleInfo: {
        listPrice: {
            amount: number
        }
    }
}