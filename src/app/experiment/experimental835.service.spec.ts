import { TestBed } from '@angular/core/testing';

import { Experimental835Service } from './experimental835.service';

describe('Experimental835Service', () => {
  let service: Experimental835Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental835Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
