import { TestBed } from '@angular/core/testing';

import { Experimental2024Service } from './experimental2024.service';

describe('Experimental2024Service', () => {
  let service: Experimental2024Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2024Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
