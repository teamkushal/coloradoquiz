import { TestBed } from '@angular/core/testing';

import { Experimental1620Service } from './experimental1620.service';

describe('Experimental1620Service', () => {
  let service: Experimental1620Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1620Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
