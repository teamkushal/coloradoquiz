import { TestBed } from '@angular/core/testing';

import { Experimental1259Service } from './experimental1259.service';

describe('Experimental1259Service', () => {
  let service: Experimental1259Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1259Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
