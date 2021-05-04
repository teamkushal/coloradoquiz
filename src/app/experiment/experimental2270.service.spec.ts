import { TestBed } from '@angular/core/testing';

import { Experimental2270Service } from './experimental2270.service';

describe('Experimental2270Service', () => {
  let service: Experimental2270Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2270Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
