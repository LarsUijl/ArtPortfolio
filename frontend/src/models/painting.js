export class Painting {
    id;
    title;
    date;
    description;
    images;

    constructor(id, title, date, description, images) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.description = description;
        this.images = images;
    }
}