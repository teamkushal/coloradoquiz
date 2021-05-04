import { TestBed } from '@angular/core/testing';

import { Experimental621Service } from './experimental621.service';

describe('Experimental621Service', () => {
  let service: Experimental621Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental621Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
