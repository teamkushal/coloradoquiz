import { TestBed } from '@angular/core/testing';

import { Experimental138Service } from './experimental138.service';

describe('Experimental138Service', () => {
  let service: Experimental138Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental138Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
