import { TestBed } from '@angular/core/testing';

import { Experimental3022Service } from './experimental3022.service';

describe('Experimental3022Service', () => {
  let service: Experimental3022Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3022Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
