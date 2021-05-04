import { TestBed } from '@angular/core/testing';

import { Experimental2026Service } from './experimental2026.service';

describe('Experimental2026Service', () => {
  let service: Experimental2026Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2026Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
