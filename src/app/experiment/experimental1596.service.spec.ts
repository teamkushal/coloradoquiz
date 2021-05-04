import { TestBed } from '@angular/core/testing';

import { Experimental1596Service } from './experimental1596.service';

describe('Experimental1596Service', () => {
  let service: Experimental1596Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1596Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
