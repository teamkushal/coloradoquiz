import { TestBed } from '@angular/core/testing';

import { Experimental1271Service } from './experimental1271.service';

describe('Experimental1271Service', () => {
  let service: Experimental1271Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1271Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
