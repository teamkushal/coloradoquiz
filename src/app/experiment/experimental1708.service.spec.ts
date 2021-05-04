import { TestBed } from '@angular/core/testing';

import { Experimental1708Service } from './experimental1708.service';

describe('Experimental1708Service', () => {
  let service: Experimental1708Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1708Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
