import { TestBed } from '@angular/core/testing';

import { Experimental1984Service } from './experimental1984.service';

describe('Experimental1984Service', () => {
  let service: Experimental1984Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1984Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
