import { TestBed } from '@angular/core/testing';

import { Experimental1690Service } from './experimental1690.service';

describe('Experimental1690Service', () => {
  let service: Experimental1690Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1690Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
