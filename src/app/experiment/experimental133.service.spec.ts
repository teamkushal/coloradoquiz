import { TestBed } from '@angular/core/testing';

import { Experimental133Service } from './experimental133.service';

describe('Experimental133Service', () => {
  let service: Experimental133Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental133Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
