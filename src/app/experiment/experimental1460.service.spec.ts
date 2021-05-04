import { TestBed } from '@angular/core/testing';

import { Experimental1460Service } from './experimental1460.service';

describe('Experimental1460Service', () => {
  let service: Experimental1460Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1460Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
