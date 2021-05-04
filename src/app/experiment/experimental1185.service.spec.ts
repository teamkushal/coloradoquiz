import { TestBed } from '@angular/core/testing';

import { Experimental1185Service } from './experimental1185.service';

describe('Experimental1185Service', () => {
  let service: Experimental1185Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1185Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
