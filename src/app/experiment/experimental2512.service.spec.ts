import { TestBed } from '@angular/core/testing';

import { Experimental2512Service } from './experimental2512.service';

describe('Experimental2512Service', () => {
  let service: Experimental2512Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2512Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
