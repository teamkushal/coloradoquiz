import { TestBed } from '@angular/core/testing';

import { Experimental2992Service } from './experimental2992.service';

describe('Experimental2992Service', () => {
  let service: Experimental2992Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2992Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
