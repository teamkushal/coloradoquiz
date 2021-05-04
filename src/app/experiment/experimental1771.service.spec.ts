import { TestBed } from '@angular/core/testing';

import { Experimental1771Service } from './experimental1771.service';

describe('Experimental1771Service', () => {
  let service: Experimental1771Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1771Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
