import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharingDataService } from '../_services/sharing-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bracelet-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bracelet-selector.component.html',
  styleUrl: './bracelet-selector.component.scss'
})
export class BraceletSelectorComponent {
  constructor(private sharingDataService: SharingDataService, private router: Router) {}

    braceletSizes: number[] = [15, 16, 17, 18, 19, 20, 21, 22];

    selectedSize: number | null = null;

    selectSize(size: number): void {
        this.selectedSize = this.selectedSize === size ? null : size;
    }

    braceletSchemes: { [key: string]: string } = {
        'Roller': 'Bransoletki/roller.png',
        'HalfRoller': 'Bransoletki/halfroller.png',
        "Mix'N Match": 'Bransoletki/mixn_match.png',
        'Classic 6mm': 'Bransoletki/classic_6mm.png',
        'Classic 8mm': 'Bransoletki/classic_8mm.png',
        'Fantasy': 'Bransoletki/fantasy.png',
    };

    selectedScheme: string | null = null;

    selectScheme(scheme: string): void {
        this.selectedScheme = this.selectedScheme === scheme ? null : scheme;
    }

    braceletTable: { [key: string]: number[] } = {
        Roller: [22, 24, 25, 27, 28, 30, 31],
        HalfRoller: [12, 13, 14, 15, 16, 17, 18],
        "Mix'N Match": [6, 6, 7, 7, 8, 8, 9],
        'Classic 6mm': [11, 12, 13, 14, 15, 16, 17],
        'Classic 8mm': [9, 9, 10, 10, 11, 12, 12],
        Fantasy: [4, 5, 5, 6, 6, 7, 7],
    };

    getBraceletResult(
        template: string | null,
        size: number | null
    ): number | null {
        if (template == null || size == null) {
            return null;
        }
        const sizeIndex = this.braceletSizes.indexOf(size);
        if (sizeIndex === -1) {
            return null;
        }
        if (!this.braceletTable[template]) {
            return null;
        }
        return this.braceletTable[template][sizeIndex];
    }

    saveSettings(template: string | null, size: number | null) {
        this.sharingDataService.braceletScheme = this.selectedScheme;
        this.sharingDataService.braceletSize = this.selectedSize;
        this.sharingDataService.numberOfRepetition = this.getBraceletResult(template, size)

        this.router.navigate(['/bracelet-generator']);
    }
}
