//by creating this class, allows us to reduce functionality from main Google Maps object

//instructions to every other class on how to be an addMarker() argument
export interface Mappable {
    location: {
        lat: number,
        lng: number
    },
    markerContent(): string,
    color: string
}

export class CustomMap {
    private googleMap: google.maps.Map

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        }) 
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })

            infoWindow.open(this.googleMap, marker)
        })
    }

}