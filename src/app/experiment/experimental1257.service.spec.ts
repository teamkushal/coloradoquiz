import { TestBed } from '@angular/core/testing';

import { Experimental1257Service } from './experimental1257.service';

describe('Experimental1257Service', () => {
  let service: Experimental1257Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1257Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
