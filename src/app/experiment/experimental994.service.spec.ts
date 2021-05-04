import { TestBed } from '@angular/core/testing';

import { Experimental994Service } from './experimental994.service';

describe('Experimental994Service', () => {
  let service: Experimental994Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental994Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
