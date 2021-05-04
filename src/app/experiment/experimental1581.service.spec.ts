import { TestBed } from '@angular/core/testing';

import { Experimental1581Service } from './experimental1581.service';

describe('Experimental1581Service', () => {
  let service: Experimental1581Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1581Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
