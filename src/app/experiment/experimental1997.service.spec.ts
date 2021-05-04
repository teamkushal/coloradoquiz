import { TestBed } from '@angular/core/testing';

import { Experimental1997Service } from './experimental1997.service';

describe('Experimental1997Service', () => {
  let service: Experimental1997Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1997Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
