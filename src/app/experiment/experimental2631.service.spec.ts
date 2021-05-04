import { TestBed } from '@angular/core/testing';

import { Experimental2631Service } from './experimental2631.service';

describe('Experimental2631Service', () => {
  let service: Experimental2631Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2631Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
