import { TestBed } from '@angular/core/testing';

import { Experimental1725Service } from './experimental1725.service';

describe('Experimental1725Service', () => {
  let service: Experimental1725Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1725Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
