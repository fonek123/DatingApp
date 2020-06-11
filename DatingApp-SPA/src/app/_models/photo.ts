import { DatePipe } from '@angular/common';

export interface Photo {
    id: number;
    url: string;
    description: string;
    dateAdded: Date;
    isMain: boolean;

}
