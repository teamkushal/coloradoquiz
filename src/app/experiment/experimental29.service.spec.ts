import { TestBed } from '@angular/core/testing';

import { Experimental29Service } from './experimental29.service';

describe('Experimental29Service', () => {
  let service: Experimental29Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental29Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
