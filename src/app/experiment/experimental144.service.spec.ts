import { TestBed } from '@angular/core/testing';

import { Experimental144Service } from './experimental144.service';

describe('Experimental144Service', () => {
  let service: Experimental144Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental144Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
