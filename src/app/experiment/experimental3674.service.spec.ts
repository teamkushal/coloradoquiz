import { TestBed } from '@angular/core/testing';

import { Experimental3674Service } from './experimental3674.service';

describe('Experimental3674Service', () => {
  let service: Experimental3674Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3674Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
