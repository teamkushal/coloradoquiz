import { TestBed } from '@angular/core/testing';

import { Experimental754Service } from './experimental754.service';

describe('Experimental754Service', () => {
  let service: Experimental754Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental754Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
