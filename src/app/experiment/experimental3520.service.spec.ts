import { TestBed } from '@angular/core/testing';

import { Experimental3520Service } from './experimental3520.service';

describe('Experimental3520Service', () => {
  let service: Experimental3520Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3520Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
