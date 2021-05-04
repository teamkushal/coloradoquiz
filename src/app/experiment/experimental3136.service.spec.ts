import { TestBed } from '@angular/core/testing';

import { Experimental3136Service } from './experimental3136.service';

describe('Experimental3136Service', () => {
  let service: Experimental3136Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3136Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
