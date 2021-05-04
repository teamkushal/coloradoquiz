import { TestBed } from '@angular/core/testing';

import { Experimental1135Service } from './experimental1135.service';

describe('Experimental1135Service', () => {
  let service: Experimental1135Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1135Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
