import { TestBed } from '@angular/core/testing';

import { Experimental858Service } from './experimental858.service';

describe('Experimental858Service', () => {
  let service: Experimental858Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental858Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
