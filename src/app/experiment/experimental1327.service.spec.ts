import { TestBed } from '@angular/core/testing';

import { Experimental1327Service } from './experimental1327.service';

describe('Experimental1327Service', () => {
  let service: Experimental1327Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1327Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
