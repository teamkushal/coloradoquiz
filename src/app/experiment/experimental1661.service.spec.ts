import { TestBed } from '@angular/core/testing';

import { Experimental1661Service } from './experimental1661.service';

describe('Experimental1661Service', () => {
  let service: Experimental1661Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1661Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
