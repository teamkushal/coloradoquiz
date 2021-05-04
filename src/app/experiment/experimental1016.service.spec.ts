import { TestBed } from '@angular/core/testing';

import { Experimental1016Service } from './experimental1016.service';

describe('Experimental1016Service', () => {
  let service: Experimental1016Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1016Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
