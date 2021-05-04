import { TestBed } from '@angular/core/testing';

import { Experimental1734Service } from './experimental1734.service';

describe('Experimental1734Service', () => {
  let service: Experimental1734Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1734Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
