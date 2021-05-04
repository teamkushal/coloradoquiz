import { TestBed } from '@angular/core/testing';

import { Experimental470Service } from './experimental470.service';

describe('Experimental470Service', () => {
  let service: Experimental470Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental470Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
