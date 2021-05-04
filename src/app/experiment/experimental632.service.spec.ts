import { TestBed } from '@angular/core/testing';

import { Experimental632Service } from './experimental632.service';

describe('Experimental632Service', () => {
  let service: Experimental632Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental632Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
