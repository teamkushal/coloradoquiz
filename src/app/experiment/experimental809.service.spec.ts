import { TestBed } from '@angular/core/testing';

import { Experimental809Service } from './experimental809.service';

describe('Experimental809Service', () => {
  let service: Experimental809Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental809Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
