import { TestBed, inject } from '@angular/core/testing';

import { EsriLoaderService } from './esri-loader.service';

describe('EsriLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EsriLoaderService]
    });
  });

  it('should ...', inject([EsriLoaderService], (service: EsriLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
