import { TestBed } from '@angular/core/testing';

import { Experimental2183Service } from './experimental2183.service';

describe('Experimental2183Service', () => {
  let service: Experimental2183Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2183Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
