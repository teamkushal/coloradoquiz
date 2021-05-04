import { TestBed } from '@angular/core/testing';

import { Experimental162Service } from './experimental162.service';

describe('Experimental162Service', () => {
  let service: Experimental162Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental162Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
