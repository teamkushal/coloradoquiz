import { TestBed } from '@angular/core/testing';

import { Experimental981Service } from './experimental981.service';

describe('Experimental981Service', () => {
  let service: Experimental981Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental981Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
