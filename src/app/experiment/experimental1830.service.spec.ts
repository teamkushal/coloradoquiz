import { TestBed } from '@angular/core/testing';

import { Experimental1830Service } from './experimental1830.service';

describe('Experimental1830Service', () => {
  let service: Experimental1830Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1830Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
