import { TestBed } from '@angular/core/testing';

import { Experimental1085Service } from './experimental1085.service';

describe('Experimental1085Service', () => {
  let service: Experimental1085Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1085Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
