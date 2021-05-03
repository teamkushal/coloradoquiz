import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent457Component } from './test-component457.component';

describe('TestComponent457Component', () => {
  let component: TestComponent457Component;
  let fixture: ComponentFixture<TestComponent457Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent457Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
