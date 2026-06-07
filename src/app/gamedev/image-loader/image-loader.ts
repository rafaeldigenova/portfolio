import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class ImageLoader {
    images = [
        '/base_cockpit.png',
    ];

    loadedImages: {path: string, img: HTMLImageElement}[] = [];

    imagesLoaded: number = 0;
    loadingPercentage: string = '';

    loadImages() {
        this.images.forEach(image => {
            const img = new Image(); 
            img.onload = () => this.loaderProgress; 
            img.src = image;
            this.loadedImages.push({path: image, img});
        });
    }

    loaderProgress() {
        this.imagesLoaded ++;
        this.loadingPercentage = `${((this.imagesLoaded / this.images.length) * 100).toFixed(2)}%`;
    }

    getLoadedImage(path: string) : HTMLImageElement | undefined {
        return this.loadedImages.find(image => image.path === path)?.img;
    }

}