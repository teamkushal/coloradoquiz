import { TestBed } from '@angular/core/testing';

import { Experimental1957Service } from './experimental1957.service';

describe('Experimental1957Service', () => {
  let service: Experimental1957Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1957Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
