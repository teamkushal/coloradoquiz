import { TestBed } from '@angular/core/testing';

import { Experimental1942Service } from './experimental1942.service';

describe('Experimental1942Service', () => {
  let service: Experimental1942Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1942Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
