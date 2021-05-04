import { TestBed } from '@angular/core/testing';

import { Experimental1220Service } from './experimental1220.service';

describe('Experimental1220Service', () => {
  let service: Experimental1220Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1220Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
