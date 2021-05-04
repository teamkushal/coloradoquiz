import { TestBed } from '@angular/core/testing';

import { Experimental1069Service } from './experimental1069.service';

describe('Experimental1069Service', () => {
  let service: Experimental1069Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1069Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
