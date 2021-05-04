import { TestBed } from '@angular/core/testing';

import { Experimental495Service } from './experimental495.service';

describe('Experimental495Service', () => {
  let service: Experimental495Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental495Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
