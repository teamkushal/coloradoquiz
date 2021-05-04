import { TestBed } from '@angular/core/testing';

import { Experimental1241Service } from './experimental1241.service';

describe('Experimental1241Service', () => {
  let service: Experimental1241Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1241Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
