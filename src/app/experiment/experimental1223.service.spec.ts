import { TestBed } from '@angular/core/testing';

import { Experimental1223Service } from './experimental1223.service';

describe('Experimental1223Service', () => {
  let service: Experimental1223Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1223Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
