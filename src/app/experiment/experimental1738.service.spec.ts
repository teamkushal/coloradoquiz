import { TestBed } from '@angular/core/testing';

import { Experimental1738Service } from './experimental1738.service';

describe('Experimental1738Service', () => {
  let service: Experimental1738Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1738Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
