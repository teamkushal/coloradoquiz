import { TestBed } from '@angular/core/testing';

import { Experimental368Service } from './experimental368.service';

describe('Experimental368Service', () => {
  let service: Experimental368Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental368Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
