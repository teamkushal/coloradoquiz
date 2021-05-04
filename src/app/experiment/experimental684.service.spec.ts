import { TestBed } from '@angular/core/testing';

import { Experimental684Service } from './experimental684.service';

describe('Experimental684Service', () => {
  let service: Experimental684Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental684Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
