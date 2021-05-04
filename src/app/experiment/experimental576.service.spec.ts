import { TestBed } from '@angular/core/testing';

import { Experimental576Service } from './experimental576.service';

describe('Experimental576Service', () => {
  let service: Experimental576Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental576Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
