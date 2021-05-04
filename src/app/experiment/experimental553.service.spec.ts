import { TestBed } from '@angular/core/testing';

import { Experimental553Service } from './experimental553.service';

describe('Experimental553Service', () => {
  let service: Experimental553Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental553Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
