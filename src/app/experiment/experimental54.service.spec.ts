import { TestBed } from '@angular/core/testing';

import { Experimental54Service } from './experimental54.service';

describe('Experimental54Service', () => {
  let service: Experimental54Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental54Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
