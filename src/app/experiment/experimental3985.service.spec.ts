import { TestBed } from '@angular/core/testing';

import { Experimental3985Service } from './experimental3985.service';

describe('Experimental3985Service', () => {
  let service: Experimental3985Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3985Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
