import { TestBed } from '@angular/core/testing';

import { Experimental292Service } from './experimental292.service';

describe('Experimental292Service', () => {
  let service: Experimental292Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental292Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
