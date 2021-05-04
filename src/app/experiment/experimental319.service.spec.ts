import { TestBed } from '@angular/core/testing';

import { Experimental319Service } from './experimental319.service';

describe('Experimental319Service', () => {
  let service: Experimental319Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental319Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
