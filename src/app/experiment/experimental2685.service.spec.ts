import { TestBed } from '@angular/core/testing';

import { Experimental2685Service } from './experimental2685.service';

describe('Experimental2685Service', () => {
  let service: Experimental2685Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2685Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
