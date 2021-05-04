import { TestBed } from '@angular/core/testing';

import { Experimental1246Service } from './experimental1246.service';

describe('Experimental1246Service', () => {
  let service: Experimental1246Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1246Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
