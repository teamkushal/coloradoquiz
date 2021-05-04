import { TestBed } from '@angular/core/testing';

import { Experimental2883Service } from './experimental2883.service';

describe('Experimental2883Service', () => {
  let service: Experimental2883Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2883Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
