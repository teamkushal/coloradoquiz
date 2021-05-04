import { TestBed } from '@angular/core/testing';

import { Experimental1337Service } from './experimental1337.service';

describe('Experimental1337Service', () => {
  let service: Experimental1337Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1337Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
