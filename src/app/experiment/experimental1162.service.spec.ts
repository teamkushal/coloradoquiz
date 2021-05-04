import { TestBed } from '@angular/core/testing';

import { Experimental1162Service } from './experimental1162.service';

describe('Experimental1162Service', () => {
  let service: Experimental1162Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1162Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
