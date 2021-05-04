import { TestBed } from '@angular/core/testing';

import { Experimental659Service } from './experimental659.service';

describe('Experimental659Service', () => {
  let service: Experimental659Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental659Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
