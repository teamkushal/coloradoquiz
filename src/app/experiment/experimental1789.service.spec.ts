import { TestBed } from '@angular/core/testing';

import { Experimental1789Service } from './experimental1789.service';

describe('Experimental1789Service', () => {
  let service: Experimental1789Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1789Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
