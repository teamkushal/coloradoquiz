import { TestBed } from '@angular/core/testing';

import { Experimental1105Service } from './experimental1105.service';

describe('Experimental1105Service', () => {
  let service: Experimental1105Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1105Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
