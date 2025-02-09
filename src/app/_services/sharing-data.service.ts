import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SharingDataService {
    public braceletScheme: string | null = null;
    public braceletSize: number | null = null;
    public numberOfRepetition: number | null = null;

    constructor() {}
}
