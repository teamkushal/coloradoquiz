import { TestBed } from '@angular/core/testing';

import { Experimental1584Service } from './experimental1584.service';

describe('Experimental1584Service', () => {
  let service: Experimental1584Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1584Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
