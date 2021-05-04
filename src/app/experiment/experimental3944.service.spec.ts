import { TestBed } from '@angular/core/testing';

import { Experimental3944Service } from './experimental3944.service';

describe('Experimental3944Service', () => {
  let service: Experimental3944Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3944Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
