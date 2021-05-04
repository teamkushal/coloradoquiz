import { TestBed } from '@angular/core/testing';

import { Experimental555Service } from './experimental555.service';

describe('Experimental555Service', () => {
  let service: Experimental555Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental555Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
