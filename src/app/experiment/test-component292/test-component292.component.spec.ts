import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent292Component } from './test-component292.component';

describe('TestComponent292Component', () => {
  let component: TestComponent292Component;
  let fixture: ComponentFixture<TestComponent292Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent292Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
