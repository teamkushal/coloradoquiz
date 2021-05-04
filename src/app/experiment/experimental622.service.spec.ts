import { TestBed } from '@angular/core/testing';

import { Experimental622Service } from './experimental622.service';

describe('Experimental622Service', () => {
  let service: Experimental622Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental622Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
