import { TestBed } from '@angular/core/testing';

import { Experimental2162Service } from './experimental2162.service';

describe('Experimental2162Service', () => {
  let service: Experimental2162Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2162Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
