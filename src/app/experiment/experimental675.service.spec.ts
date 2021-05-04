import { TestBed } from '@angular/core/testing';

import { Experimental675Service } from './experimental675.service';

describe('Experimental675Service', () => {
  let service: Experimental675Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental675Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
