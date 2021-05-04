import { TestBed } from '@angular/core/testing';

import { Experimental1648Service } from './experimental1648.service';

describe('Experimental1648Service', () => {
  let service: Experimental1648Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1648Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
