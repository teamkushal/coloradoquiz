import { TestBed } from '@angular/core/testing';

import { Experimental262Service } from './experimental262.service';

describe('Experimental262Service', () => {
  let service: Experimental262Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental262Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
