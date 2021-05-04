import { TestBed } from '@angular/core/testing';

import { Experimental1397Service } from './experimental1397.service';

describe('Experimental1397Service', () => {
  let service: Experimental1397Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1397Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
