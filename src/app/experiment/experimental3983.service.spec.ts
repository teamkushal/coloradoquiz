import { TestBed } from '@angular/core/testing';

import { Experimental3983Service } from './experimental3983.service';

describe('Experimental3983Service', () => {
  let service: Experimental3983Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3983Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
