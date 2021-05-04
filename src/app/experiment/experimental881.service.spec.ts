import { TestBed } from '@angular/core/testing';

import { Experimental881Service } from './experimental881.service';

describe('Experimental881Service', () => {
  let service: Experimental881Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental881Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
