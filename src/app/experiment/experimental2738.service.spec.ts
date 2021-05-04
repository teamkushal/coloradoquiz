import { TestBed } from '@angular/core/testing';

import { Experimental2738Service } from './experimental2738.service';

describe('Experimental2738Service', () => {
  let service: Experimental2738Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2738Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
