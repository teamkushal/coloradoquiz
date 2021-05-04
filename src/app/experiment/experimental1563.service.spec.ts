import { TestBed } from '@angular/core/testing';

import { Experimental1563Service } from './experimental1563.service';

describe('Experimental1563Service', () => {
  let service: Experimental1563Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1563Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
