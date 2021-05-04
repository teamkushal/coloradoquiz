import { TestBed } from '@angular/core/testing';

import { Experimental531Service } from './experimental531.service';

describe('Experimental531Service', () => {
  let service: Experimental531Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental531Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
