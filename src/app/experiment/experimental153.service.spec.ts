import { TestBed } from '@angular/core/testing';

import { Experimental153Service } from './experimental153.service';

describe('Experimental153Service', () => {
  let service: Experimental153Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental153Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
