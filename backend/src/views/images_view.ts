import Image from '../models/Images';
import Images from '../models/Images';

export default {
    render(image: Images) {
        return {
            id: image.id,
            url: `http://localhost:3333/assets/uploads/${image.path}`
        };
    },
    renderMany(images: Images[]) {
        return images.map(image => this.render(image));
    }
};