import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent597Component } from './test-component597.component';

describe('TestComponent597Component', () => {
  let component: TestComponent597Component;
  let fixture: ComponentFixture<TestComponent597Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent597Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
