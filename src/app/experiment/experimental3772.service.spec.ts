import { TestBed } from '@angular/core/testing';

import { Experimental3772Service } from './experimental3772.service';

describe('Experimental3772Service', () => {
  let service: Experimental3772Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3772Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
