// src/app/search/search.component.ts

import { Component } from '@angular/core';
import { WikiApiService } from '../wiki-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private wikiApiService: WikiApiService) { }

  search(): void {
    this.wikiApiService.search(this.searchQuery).subscribe(
      (data) => {
        this.searchResults = data.query.search;
        console.log('Search Results:', this.searchResults);
      },
      (error) => {
        console.error('Error fetching search results:', error);
      }
    );
  }
}
