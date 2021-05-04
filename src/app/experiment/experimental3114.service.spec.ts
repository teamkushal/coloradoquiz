import { TestBed } from '@angular/core/testing';

import { Experimental3114Service } from './experimental3114.service';

describe('Experimental3114Service', () => {
  let service: Experimental3114Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3114Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
