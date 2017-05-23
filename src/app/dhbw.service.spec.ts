import { TestBed, inject } from '@angular/core/testing';

import { DhbwService } from './dhbw.service';

describe('DhbwService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DhbwService]
    });
  });

  it('should be created', inject([DhbwService], (service: DhbwService) => {
    expect(service).toBeTruthy();
  }));
});
