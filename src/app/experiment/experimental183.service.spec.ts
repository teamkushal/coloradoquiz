import { TestBed } from '@angular/core/testing';

import { Experimental183Service } from './experimental183.service';

describe('Experimental183Service', () => {
  let service: Experimental183Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental183Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
