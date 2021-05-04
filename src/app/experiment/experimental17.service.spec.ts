import { TestBed } from '@angular/core/testing';

import { Experimental17Service } from './experimental17.service';

describe('Experimental17Service', () => {
  let service: Experimental17Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental17Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
