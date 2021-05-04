import { TestBed } from '@angular/core/testing';

import { Experimental1899Service } from './experimental1899.service';

describe('Experimental1899Service', () => {
  let service: Experimental1899Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1899Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
