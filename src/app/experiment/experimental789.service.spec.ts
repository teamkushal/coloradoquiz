import { TestBed } from '@angular/core/testing';

import { Experimental789Service } from './experimental789.service';

describe('Experimental789Service', () => {
  let service: Experimental789Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental789Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
