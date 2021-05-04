import { TestBed } from '@angular/core/testing';

import { Experimental695Service } from './experimental695.service';

describe('Experimental695Service', () => {
  let service: Experimental695Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental695Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
