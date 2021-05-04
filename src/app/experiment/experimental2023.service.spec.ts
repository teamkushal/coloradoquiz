import { TestBed } from '@angular/core/testing';

import { Experimental2023Service } from './experimental2023.service';

describe('Experimental2023Service', () => {
  let service: Experimental2023Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2023Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
