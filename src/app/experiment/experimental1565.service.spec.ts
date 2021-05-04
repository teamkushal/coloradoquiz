import { TestBed } from '@angular/core/testing';

import { Experimental1565Service } from './experimental1565.service';

describe('Experimental1565Service', () => {
  let service: Experimental1565Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1565Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
