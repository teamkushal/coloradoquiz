import { TestBed } from '@angular/core/testing';

import { Experimental2985Service } from './experimental2985.service';

describe('Experimental2985Service', () => {
  let service: Experimental2985Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2985Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
