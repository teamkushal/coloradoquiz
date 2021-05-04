import { TestBed } from '@angular/core/testing';

import { Experimental2003Service } from './experimental2003.service';

describe('Experimental2003Service', () => {
  let service: Experimental2003Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2003Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
