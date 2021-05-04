import { TestBed } from '@angular/core/testing';

import { Experimental1024Service } from './experimental1024.service';

describe('Experimental1024Service', () => {
  let service: Experimental1024Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1024Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
